import React, { useState } from 'react';
import { Form, Table } from "react-bootstrap";
import { PencilFill, Save, Trash, XSquare } from 'react-bootstrap-icons';
import './EditableTable.css';
import { Checkbox } from 'antd';

const EditableTable = ({ updateProject, deleteProjects, columns, rows, actions }) => {
  // Состояние для определения, находится ли компонент в режиме редактирования или нет
  const [isEditMode, setIsEditMode] = useState(false);
  // Состояние для хранения идентификатора редактируемой строки
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  // Состояние для хранения данных строк таблицы
  const [rowsState, setRowsState] = useState(rows);
  // Состояние для хранения измененной строки
  const [editedRow, setEditedRow] = useState();

  // Обработчик события для редактирования строки
  const handleEdit = (rowID) => {
    setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(rowID);
  }

  // Обработчик события для удаления строки
  const handleRemoveRow = (rowID) => {
    // Создаем новый массив данных, исключая удаляемую строку
    const newData = rowsState.filter(row => {
      if (row.id !== rowID){
        return row
      } else{
        deleteProjects(row)
        return null
      }
    });

    setRowsState(newData);
  }

  // Обработчик события для изменения значения поля
  const handleOnChangeField = (e, rowID) => {
    const { name: fieldName, value } = e.target;
    // Обновляем состояние редактируемой строки
    setEditedRow({
      id: rowID,
      [fieldName]: value
    })
  }

  // Обработчик события для отмены редактирования строки
  const handleCancelEditing = () => {
    setIsEditMode(false);
    setEditedRow(undefined);
  }

  // Обработчик события для сохранения изменений строки
  const handleSaveRowChanges = () => {

    setIsEditMode(false);
      // Создаем новый массив данных, обновляя измененную строку
      const newData = rowsState.map(row => {
        if (row.id === editedRow.id) {
          if (editedRow.firstName) row.firstName = editedRow.firstName;
          if (editedRow.lastName) row.lastName = editedRow.lastName;
          if (editedRow.role) row.role = editedRow.role;
          updateProject(row)
        }
        
        return row;
      })

      setRowsState(newData);
      setEditedRow(undefined)

    // setTimeout(() => {
    //   setIsEditMode(false);
    //   // Создаем новый массив данных, обновляя измененную строку
    //   const newData = rowsState.map(row => {
    //     if (row.id === editedRow.id) {
    //       if (editedRow.firstName) row.firstName = editedRow.firstName;
    //       if (editedRow.lastName) row.lastName = editedRow.lastName;
    //       if (editedRow.role) row.role = editedRow.role;
    //       console.log(row)
    //     }
        
    //     return row;
    //   })

    //   setRowsState(newData);
    //   setEditedRow(undefined)
    // }, 1000)
  }
  const handleCheckbox = ({ id, name }) => {
    
  }
  const handleChange = (e, rowID, status, fieldName) => {
    //обработчик клика по чекбоксу выбора файла для сохранения
    e.target.checked ? status = true : status = false;
    console.log(fieldName);

    const cianObject = {
      id: rowID,
      [fieldName]: status,
      status,
    }
    handleCheckbox(cianObject)
  };
  return (
    <Table striped bordered hover>
      <thead>
      <tr>
         {/* Отображаем заголовки столбцов */}
         <th></th>
        {columns.map((column) => {
          return <th key={column.field}>{ column.fieldName }</th>
        })}
      </tr>
      </thead>
      <tbody>
      {rowsState.map((row) => {
        return <tr key={row.id}>
          {actions &&
          <td>
            {/* Кнопка сохранения изменений */}
            { isEditMode && rowIDToEdit === row.id
              ? <button onClick={ () => handleSaveRowChanges() } className='custom-table__action-btn' disabled={!editedRow}>
                <Save />
              </button>
              : <button  onClick={ () => handleEdit(row.id) } className='custom-table__action-btn'>
                <PencilFill />
              </button>
            }
            
            {/* Кнопка отмены редактирования */}
            { isEditMode && rowIDToEdit === row.id
              ? <button onClick={() => handleCancelEditing()} className='custom-table__action-btn'>
                <XSquare />
              </button>
              : <button onClick={() => handleRemoveRow(row.id)} className='custom-table__action-btn'>
                <Trash />
              </button>
            }
          </td>
          }
          <td>
            <Checkbox checked={row.cian} onChange={ (e) => handleChange(e, row.id, row.cian, "cian")}>{row.cian}</Checkbox>
          </td>
          <td>
            {row.id}
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <Form.Control
                type='text'
                defaultValue={editedRow ? editedRow.firstName : row.firstName}
                id={row.id}
                name='firstName'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.firstName
            }
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <Form.Control
                type='text'
                defaultValue={editedRow ? editedRow.lastName : row.lastName}
                id={row.id}
                name='lastName'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.lastName
            }
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <Form.Select onChange={e => handleOnChangeField(e, row.id)} name="role" defaultValue={row.role}>
                <option value='Admin'>Admin</option>
                <option value='Editor'>Editor</option>
                <option value='Subscriber'>Subscriber</option>
              </Form.Select>
              : row.role
            }
          </td>
        </tr>
      })}
      </tbody>
    </Table>
  );
};

export default EditableTable;