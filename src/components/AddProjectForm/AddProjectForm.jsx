import { Table } from "react-bootstrap";
import { RollbackOutlined, InfoCircleOutlined } from "@ant-design/icons";
import "./AddProjectForm.css";
import {
  Popconfirm,
  message,
  Checkbox,
  Select,
  Input,
  Form,
  Button,
} from "antd";
import { colAdd } from "../../utils/constants";
import { useState } from "react";

const AddProjectForm = ({
  data,
  setData,
  isBlockVisible,
  toggleAddBlockVisibility,
  createProject,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const [type, setType] = useState();

  const onFinish = async (values) => {
    setIsLoading(true); // Устанавливаем isLoading в true перед началом отправки формы
    values.id = data.length + 1;
    values.is_cian = values.is_cian ? 1 : 0;
    values.is_direct = values.is_direct ? 1 : 0;
    values.is_avito = values.is_avito ? 1 : 0;
    try {
      // Вызываем асинхронный запрос createProject
      await createProject(values);
      setData([...data, values]);
      console.log(values);
      message.success(`Проект добавлен`);
    } catch (error) {
      message.error("Проект не добавлен");
      console.error("Произошла ошибка при отправке формы", error);
    } finally {
      setIsLoading(false);
      toggleAddBlockVisibility();
      form.resetFields(); // Сброс значений полей формы
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Проект не добавлен");
  };

  const validateNumber = (_, value) => {
    if (value && !/^\d+$/.test(value)) {
      return Promise.reject("Разрешены только числа");
    }
    return Promise.resolve();
  };
  return (
    <div className={`block ${isBlockVisible ? "visible" : ""}`}>
      <h1 className="title">Добавление проекта</h1>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ is_cian: false, is_direct: false, is_avito: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Table striped bordered hover className="addProjectTable">
          <thead className="table__head">
            <tr>
              {/* Отображаем заголовки столбцов */}
              {colAdd.map((column, index) => {
                if (index === 1) {
                  //пустая шапка под actions
                  return <th key={column.field}>{column.fieldName}</th>;
                } else {
                  return <th key={column.field}>{column.fieldName}</th>;
                }
              })}
            </tr>
          </thead>
          <tbody className="table__body">
            <tr>
              <td>
                <Form.Item name="is_cian" valuePropName="checked">
                  <Checkbox></Checkbox>
                </Form.Item>
              </td>
              <td>
                <Form.Item name="is_direct" valuePropName="checked">
                  <Checkbox></Checkbox>
                </Form.Item>
              </td>
              <td>
                <Form.Item name="is_avito" valuePropName="checked">
                  <Checkbox></Checkbox>
                </Form.Item>
              </td>
              <td>
                <Form.Item
                  name="category_obj"
                  rules={[{ required: true, message: "Заполните поле" }]}
                >
                  <Select
                    name="category_obj"
                    style={{ width: 100 }}
                    options={[
                      { value: "Готовый дом", label: "Готовый дом" },
                      { value: "Участок", label: "Участок" },
                    ]}
                    required
                    onChange={(e) => {
                      setType(e);
                    }}
                  />
                </Form.Item>
              </td>
              <td>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: "Заполните поле" }]}
                >
                  <Input
                    type="text"
                    name="name"
                    style={{ width: 340 }}
                    required
                  />
                </Form.Item>
              </td>
              <td>
                <Form.Item
                  name="floor"
                  rules={[{ required: true, message: "Заполните поле" }]}
                >
                  <Select
                    name="floor"
                    style={{ width: 60 }}
                    options={[
                      { value: 1, label: "1" },
                      { value: 2, label: "2" },
                    ]}
                  />
                </Form.Item>
              </td>
              <td>
                <Form.Item
                  name="sq"
                  rules={[
                    {
                      required: true,
                      message: "Введите число",
                    },
                    {
                      validator: validateNumber,
                    },
                  ]}
                >
                  <Input type="number" name="size" style={{ width: 90 }} />
                </Form.Item>
              </td>
              <td>
                <Form.Item
                  name="town"
                  rules={[{ required: false, message: "Заполните поле" }]}
                >
                  <Select
                    name="town"
                    style={{ width: 130 }}
                    options={[
                      { value: "nasledie", label: "Наследие" },
                      { value: "riga", label: "Riga life" },
                    ]}
                    disabled={type !== "Готовый дом"}
                  />
                </Form.Item>
              </td>
            </tr>
          </tbody>
        </Table>

        <Button
          className="saveProjectBtn"
          align="right"
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          Сохранить
        </Button>
      </Form>
    </div>
  );
};

export default AddProjectForm;
