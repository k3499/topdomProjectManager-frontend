import { Table } from "react-bootstrap";
import {  RollbackOutlined, InfoCircleOutlined} from '@ant-design/icons';
import './AddProjectForm.css';
import { Popconfirm, message, Checkbox, Select, Input, Form, Button } from 'antd';
import { colAdd } from '../../utils/constants'
import { useState } from "react";

const AddProjectForm = ({isBlockVisible, toggleAddBlockVisibility}) => {
  const [projectToAdd, setProjectToAdd] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [form] = Form.useForm();

  const enterLoading = () => {
    setTimeout(() => {
      setIsLoading(true);
    });
  };

  const onFinish = async (values) => {
    setIsLoading(true); // Устанавливаем isLoading в true перед началом отправки формы
    

    try {
      // Имитируем задержку с помощью setTimeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Ваши действия при отправке формы (например, запрос на сервер)

      message.success(`Проект добавлен`);
    } catch (error) {
      message.error('Проект не добавлен');
      console.error('Произошла ошибка при отправке формы', error);
    } finally {
      setIsLoading(false);
      toggleAddBlockVisibility();
      form.resetFields(); // Сброс значений полей формы
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Проект не добавлен');
  };


  const validateNumber = (_, value) => {
    if (value && !/^\d+$/.test(value)) {
      return Promise.reject('Разрешены только числа');
    }
    return Promise.resolve();
  };
  return (
    <div className={`block ${isBlockVisible ? 'visible' : ''}`}>
      <h1 className='title'>Добавление проекта</h1>
      <Form
          form={form} 
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ cian: false, direct: false, avito: false }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
      <Table striped bordered hover>
        <thead className='table__head'>
        <tr>
          {/* Отображаем заголовки столбцов */}
          {colAdd.map((column, index) => {
            if (index === 1) {
              //пустая шапка под actions
              return <th key={column.field}>{ column.fieldName }</th>
            }else{
            return <th key={column.field}>{ column.fieldName }</th>
            }
          })}
        </tr>
        </thead>
        <tbody>

          <tr>
            <td>
            <Form.Item name="cian" valuePropName="checked">
                <Checkbox></Checkbox>
            </Form.Item>
            </td>
            <td>
            <Form.Item name="direct" valuePropName="checked">
              <Checkbox></Checkbox>
            </Form.Item>
            </td>
            <td>
            <Form.Item name="avito" valuePropName="checked">
              <Checkbox></Checkbox>
            </Form.Item>
            </td>
            <td>
              <Form.Item 
                name="type"
                rules={[{ required: true, message: 'Заполните поле' }]}
              >
                <Select 
                  name="type"
                  style={{ width: 100 }}
                  options={[
                    { value: 'home', label: 'Дом' },
                    { value: 'plot', label: 'Участок' }
                  ]}
                  required
                />
              </Form.Item>
            </td>
            <td>
            <Form.Item
              name="title"
              rules={[{ required: true, message: 'Заполните поле' }]}
            >
              <Input
                type='text'
                name='title'
                style={{ width: 250 }}
                required
              />
            </Form.Item>
            </td>
            <td>
              <Form.Item 
                name="floors"
                rules={[{ required: true, message: 'Заполните поле' }]}
              >
                <Select 
                  name="floors"
                  style={{ width: 60 }}
                  options={[
                    { value: 1, label: '1' },
                    { value: 2, label: '2' }
                  ]}
                />
              </Form.Item>
            </td>
            <td>
                <Form.Item
                  name="size"
                  rules={[
                    {
                      required: true,
                      message: 'Введите число',
                    },
                    {
                      validator: validateNumber,
                    },
                  ]}
                >
                <Input
                  type='number'
                  name='size'
                  style={{ width: 90 }}
                />
              </Form.Item>
            </td>
          </tr>
        </tbody>
        </Table>
        <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading} onClick={() => enterLoading(0)}>
          Submit
        </Button>
      </Form.Item>
      </Form>
    </div>
  );
};

export default AddProjectForm;

