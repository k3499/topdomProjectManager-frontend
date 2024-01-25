import React, { useEffect } from "react";
import { Avatar, Form, Button, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = ({ user, setUser, login }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  const handleLogin = async (values) => {
    //setIsLoading(true); // Устанавливаем isLoading в true перед началом отправки формы
    try {
      if (values.password === "1111") {
        setUser(true);
        login(values);
        navigate("/");
      }
      // // Вызываем асинхронный запрос createProject
      // await createProject(values);
      // console.log(values);
      // message.success(`Проект добавлен`);
    } catch (error) {
      // message.error("Проект не добавлен");
      // console.error("Произошла ошибка при отправке формы", error);
    } finally {
      // setIsLoading(false);
      // toggleAddBlockVisibility();
      // form.resetFields(); // Сброс значений полей формы
    }
  };
  return (
    <>
      <div className="login__popup">
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          name="login"
          //initialValues={{ is_cian: false, is_direct: false, is_avito: false }}
          onFinish={handleLogin}
          //onFinishFailed={onFinishFailed}
          style={{ maxWidth: "100%" }}
        >
          <Form.Item
            name="login"
            rules={[{ required: true, message: "Пожалуйста, введите логин!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Логин"
              className="login__input"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
              className="login__input"
            />
          </Form.Item>
          <Button
            className="submitBtn"
            align="center"
            type="primary"
            htmlType="submit"
            //loading={isLoading}
          >
            Войти
          </Button>
        </Form>
      </div>
      <div className="login__bgLeft"></div>
      <div className="login__bgRight"></div>
    </>
  );
};

export default LoginPage;
