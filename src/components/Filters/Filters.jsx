import React, { useState } from "react";
import "./Filters.css";
import { Button } from "antd";
import { LinkOutlined, CheckCircleOutlined } from "@ant-design/icons";
import AddProjectForm from "../AddProjectForm/AddProjectForm";
import Search from "../Search/Search";

const Filters = ({
  data,
  handlefilteredRows,
  columns,
  createProject,
  xmlName,
}) => {
  const [isBlockVisible, setBlockVisible] = useState(false);
  const [copyingStatus, setCopyingStatus] = useState(false);

  const toggleAddBlockVisibility = () => {
    setBlockVisible(!isBlockVisible);
  };
  const copyToClipboard = (evt) => {
    let textToCopy = `https://phpmyadmin.topdom-erp.ru/TopDomApps-Backend/${xmlName}.xml`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Текст скопирован в буфер обмена:", textToCopy);
        setCopyingStatus(true);
        setTimeout(() => {
          setCopyingStatus(false);
        }, 600);
      })
      .catch((err) => {
        console.error("Ошибка при копировании текста в буфер обмена:", err);
      });
  };
  return (
    <>
      <div className="filters__wrapper">
        <div className="filters__top">
          <Search data={data} handlefilteredRows={handlefilteredRows} />
          {xmlName && (
            <Button
              type="primary"
              icon={copyingStatus ? <CheckCircleOutlined /> : <LinkOutlined />}
              onClick={copyToClipboard}
            >
              XML
            </Button>
          )}
        </div>
        <Button
          onClick={toggleAddBlockVisibility}
          type="primary"
          className="addButton"
        >
          Добавить
        </Button>
      </div>

      <AddProjectForm
        isBlockVisible={isBlockVisible}
        columns={columns}
        toggleAddBlockVisibility={toggleAddBlockVisibility}
        createProject={createProject}
      />
    </>
  );
};

export default Filters;
