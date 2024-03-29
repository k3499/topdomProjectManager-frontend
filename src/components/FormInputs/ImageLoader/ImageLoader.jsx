import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { message, Modal, Upload, Divider, Skeleton } from "antd";
import { BASE_URL } from "../../../utils/constants";
import { deleteImage, getImage } from "../../../utils/api";
import "./ImageLoader.css";

const ImageLoader = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [mainPhotoList, setMainPhotoList] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [planList, setPlanList] = useState([]);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(true);
      setPassword(user.password);
    }
    console.log(user);
  }, []);

  useEffect(() => {
    setIsLoading(true); // Устанавливаем состояние загрузки в true при начале загрузки

    Promise.all([
      getImage(id, "Main"),
      getImage(id, "Fasad"),
      getImage(id, "Plan"),
    ]).then(([mainRes, fileRes, planRes]) => {
      setMainPhotoList(mainRes);
      setFileList(fileRes);
      setPlanList(planRes);
      setIsLoading(false); // Устанавливаем состояние загрузки в false по окончанию загрузки
    });
  }, [id]);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Загрузить</div>
    </button>
  );

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("Можно использовать только JPG/PNG изображения!");
    }
    return isJpgOrPng;
  };

  const handleChangeMain = ({ fileList: newFileList }) => {
    if (password === "1234") {
      message.error("вы не можете менять изображения", 3);
      return;
    } else {
      console.log(newFileList);
      setMainPhotoList(newFileList);
    }
  };

  const handleChangeAll = ({ fileList: newFileList }) => {
    if (password === "1234") {
      console.log(password);
      message.error("вы не можете менять изображения", 3);
      return;
    } else {
      console.log(password);
      console.log("выполнил");
      setFileList(newFileList);
    }
  };
  const handleChangePlan = ({ fileList: newFileList }) => {
    if (password === "1234") {
      message.error("вы не можете менять изображения", 3);
      return;
    } else {
      setPlanList(newFileList);
    }
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleCancel = () => setPreviewOpen(false);

  const handleRemove = (file) => {
    if (password === "1234") {
      message.error("вы не можете удалять изображения", 3);
      return;
    } else {
      // Отправка запроса на удаление файла с использованием функции deleteFile из api.js
      deleteImage(file.uid);
    }
  };
  return (
    <tr class="table__image-spoiler">
      <td colSpan="40">
        <div className="image-spoiler">
          <Divider orientation="left">Главное изображение</Divider>
          {isLoading ? (
            <Skeleton.Image active={true} />
          ) : (
            <>
              <Upload
                action={BASE_URL + "index.php"}
                listType="picture-card"
                data={{ method: "addPhoto", type: "Main", id: id }}
                fileList={mainPhotoList}
                onPreview={handlePreview}
                beforeUpload={beforeUpload}
                onChange={handleChangeMain}
                onRemove={handleRemove}
              >
                {mainPhotoList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </>
          )}

          <Divider orientation="left">Другие изображения</Divider>
          {isLoading ? (
            <Skeleton.Image active={true} />
          ) : (
            <>
              <Upload
                action={BASE_URL + "index.php"}
                listType="picture-card"
                fileList={fileList}
                data={{ method: "addPhoto", type: "Fasad", id: id }}
                onPreview={handlePreview}
                beforeUpload={beforeUpload}
                onChange={handleChangeAll}
                onRemove={handleRemove}
              >
                {fileList.length >= 4 ? null : uploadButton}
              </Upload>
              <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </>
          )}

          <Divider orientation="left">Планировки</Divider>
          {isLoading ? (
            <Skeleton.Image active={true} />
          ) : (
            <>
              <Upload
                action={BASE_URL + "index.php"}
                listType="picture-card"
                fileList={planList}
                data={{ method: "addPhoto", type: "Plan", id: id }}
                onPreview={handlePreview}
                beforeUpload={beforeUpload}
                onChange={handleChangePlan}
                onRemove={handleRemove}
              >
                {planList.length >= 2 ? null : uploadButton}
              </Upload>
              <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default ImageLoader;
