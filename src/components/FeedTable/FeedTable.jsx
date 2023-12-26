import React, { useState, useEffect } from 'react';
import { Form, Table } from "react-bootstrap";
import { DeleteOutlined, EditOutlined, SaveOutlined, RollbackOutlined} from '@ant-design/icons';
import './FeedTable.css';
import { Select, Input } from 'antd';

const FeedTable = ({ updateFile, updateProject, deleteProjects, columns, rows, actions }) => {
  // Состояние для определения, находится ли компонент в режиме редактирования или нет
  const [isEditMode, setIsEditMode] = useState(false);
  // Состояние для хранения идентификатора редактируемой строки
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  // Состояние для хранения данных строк таблицы
  const [rowsState, setRowsState] = useState(rows);
  // Состояние для хранения измененной строки
  const [editedRow, setEditedRow] = useState();

  useEffect(() => {
    setRowsState(rows);
    console.log(rows)
  }, [rows]);

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
      console.log(e)
      console.log(rowID)
      //Обновляем состояние редактируемой строки
      console.log({
        id: rowID,
        type: e
      })
      setEditedRow(prevRow => ({
        ...(prevRow && prevRow.id ? prevRow : { id: rowID }),
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
          if (editedRow.title) row.title = editedRow.title;
          if (editedRow.floors) row.floors = editedRow.floors;
          if (editedRow.size) row.size = editedRow.size;
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
    //       if (editedRow.title) row.title = editedRow.title;
    //       if (editedRow.floors) row.floors = editedRow.floors;
    //       if (editedRow.size) row.size = editedRow.size;
    //       console.log(row)
    //     }
        
    //     return row;
    //   })

    //   setRowsState(newData);
    //   setEditedRow(undefined)
    // }, 1000)
  }

  return (
    
    <Table striped bordered hover>
      <thead className='table__head'>
      <tr>
         {/* Отображаем заголовки столбцов */}
        {columns.map((column, index) => {
          if (index === 1) {
            //пустая шапка под actions
            return <><th key={"empty"}></th><th key={column.field}>{ column.fieldName }</th></>
          }else{
          return <th key={column.field}>{ column.fieldName }</th>
          }
        })}
      </tr>
      </thead>
      <tbody>
      {rowsState.map((row) => {
        return <tr key={row.id}>
          <td>
            {row.id}
          </td>
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
            { isEditMode && rowIDToEdit === row.id
              ? <Input
                type='text'
                defaultValue={editedRow ? editedRow.title : row.title}
                id={row.id}
                name='title'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.title
            }
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <Input
                type='text'
                defaultValue={editedRow ? editedRow.floors : row.floors}
                id={row.id}
                name='floors'
                onChange={ (e) => handleOnChangeField(e, row.id) }
              />
              : row.floors
            }
          </td>
          <td>
            { isEditMode && rowIDToEdit === row.id
              ? <Form.Select onChange={e => handleOnChangeField(e, row.id)} name="size" defaultValue={row.size}>
                <option value='Admin'>Admin</option>
                <option value='Editor'>Editor</option>
                <option value='Subscriber'>Subscriber</option>
              </Form.Select>
              : row.size
            }
          </td>
        </tr>
      })}
      </tbody>
    </Table>
  );
};

export default FeedTable;