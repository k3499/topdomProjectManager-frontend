import React, { useState } from 'react';
import { Form, Table } from "react-bootstrap";
import { DeleteOutlined, EditOutlined, SaveOutlined, RollbackOutlined} from '@ant-design/icons';
import './Avito.css';
import { Checkbox, Select, Input } from 'antd';

const Avito = ({ updateFile, updateProject, deleteProjects, columns, rows, actions }) => {
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
    //Обновляем состояние редактируемой строки
    console.log({
      id: rowID,
      [fieldName]: value
    })
    setEditedRow(prevRow => ({
      ...(prevRow && prevRow.id ? prevRow : { id: rowID }), // проверяем наличие prevRow и id
      [fieldName]: value
    }));
  }
    // Обработчик события для изменения значения выпадающего списка
    const handleOnChangeSelect = (e, rowID) => {
      //Обновляем состояние редактируемой строки
      console.log({
        id: rowID,
        type: e
      })
      setEditedRow(prevRow => ({
        ...prevRow,
        id: prevRow.id || rowID, // записываем `id` только если его нет
        type: e
      }));
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
          //пробегаемся по всем строкам и если находим редактируемую, то смотрти какое поле изменилось в editedRow
          if (editedRow.type) row.type = editedRow.type;
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
 
  const handleChange = (e, rowID, status, fieldName, row) => {
    //обработчик клика по чекбоксу выбора файла для сохранения
    e.target.checked ? status = false : status = true;
    e.target.checked = status;

    const newFileData = {
      id: rowID,
      [fieldName]: !e.target.checked
    }
    
    updateFile(newFileData)
     // Обновляем значение `status` в состоянии строки `row`
    const updatedRow = {
      ...row,
      [fieldName]: !status
    };

    // Обновляем состояние строк
    const updatedRows = rowsState.map((r) => {
      if (r.id === rowID) {
        return updatedRow;
      }
      return r;
    });

    setRowsState(updatedRows);
  }
  return (
    
    <Table striped bordered hover>
      <thead className='table__head'>
      <tr>
         {/* Отображаем заголовки столбцов */}
         <th>1111</th>
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
                <SaveOutlined style={{ fontSize: '13px', color: '#646464' }}/>
              </button>
              : <button  onClick={ () => handleEdit(row.id) } className='custom-table__action-btn'>
                <EditOutlined style={{ fontSize: '13px', color: '#646464' }}/>
              </button>
            }
            
            {/* Кнопка отмены редактирования */}
            { isEditMode && rowIDToEdit === row.id
              ? <button onClick={() => handleCancelEditing()} className='custom-table__action-btn'>
                <RollbackOutlined style={{ fontSize: '13px', color: '#646464' }}/>
              </button>
              : <button onClick={() => handleRemoveRow(row.id)} className='custom-table__action-btn'>
                <DeleteOutlined style={{ fontSize: '13px', color: '#646464' }}/>
              </button>
            }
          </td>
          }
          <td>
            <Checkbox checked={row.cian} onChange={ (e) => handleChange(e, row.id, row.cian, "cian", row)}>{row.cian}</Checkbox>
          </td>
          <td>
            <Checkbox checked={row.direct} onChange={ (e) => handleChange(e, row.id, row.direct, "direct", row)}>{row.direct}</Checkbox>
          </td>
          <td>
            <Checkbox checked={row.avito} onChange={ (e) => handleChange(e, row.id, row.avito, "avito", row)}>{row.avito}</Checkbox>
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <Select 
                onChange={e => handleOnChangeSelect(e, row.id)}
                name="type"
                defaultValue={row.type}
                style={{ width: 100 }}
                options={[
                  { value: 'home', label: 'Дом' },
                  { value: 'plot', label: 'Участок' }
                ]}
              />
              : row.type === 'home' ? 'Дом' : 'Участок' 
            }
          </td>
          <td>
            {row.id}
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <Input
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
              ? <Input
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

export default Avito;