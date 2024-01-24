import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar, Form, Button, Input } from "antd";
import "./LoginPage.css";

const LoginPage = () => {
  const [form] = Form.useForm();
  return (
    <>
      <div className="login__popup">
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          //initialValues={{ is_cian: false, is_direct: false, is_avito: false }}
          //onFinish={onFinish}
          //onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="login"
            rules={[
              {
                required: true,
                message: "Введите логин",
              },
              // {
              //   validator: validateNumber,
              // },
            ]}
          >
            <Input
              type="string"
              name="login"
              style={{ width: "100%", background: "#F5F5F5" }}
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
