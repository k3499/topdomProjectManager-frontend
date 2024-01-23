import React, { useState, useCallback } from "react";
import "./DashboardTableRow.css";
import { Popconfirm, message, Checkbox, Select, Input } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
  RollbackOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

import Id from "../FormInputs/Id/Id";
import Actions from "../FormInputs/Actions/Actions";
import FileCheckbox from "../FormInputs/FileCheckbox/FileCheckbox";
import CategoryObj from "../FormInputs/CategoryObj/CategoryObj";

const DashboardTableRow = React.memo(
  ({
    actions,
    rowsState,
    setRowsState,
    updateProject,
    row,
    deleteProjects,
  }) => {
    // Состояние для определения, находится ли компонент в режиме редактирования или нет
    const [isEditMode, setIsEditMode] = useState(false);
    // Состояние для хранения идентификатора редактируемой строки
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    // Состояние для хранения измененной строки
    const [editedRow, setEditedRow] = useState();

    // Обработчик события для изменения значения выпадающего списка
    const handleOnChangeType = (e, rowID) => {
      //Обновляем состояние редактируемой строки
      console.log({
        id: rowID,
        category_obj: e,
      });
      setEditedRow((prevRow) => ({
        ...(prevRow && prevRow.id ? prevRow : { id: rowID }),
        category_obj: e,
      }));
    };

    // Обработчик события для изменения значения поля
    const handleOnChangeField = (e, rowID) => {
      const { name: fieldName, value } = e.target;
      setEditedRow((prevRow) => ({
        ...(prevRow && prevRow.id ? prevRow : { id: rowID }), // проверяем наличие prevRow и id
        [fieldName]: value,
      }));
    };

    // Обработчик события для изменения значения выпадающего списка
    const handleOnChangeSelect = (e, rowID, name) => {
      //Обновляем состояние редактируемой строки
      setEditedRow((prevRow) => ({
        ...(prevRow && prevRow.id ? prevRow : { id: rowID }),
        [name]: e,
      }));
    };

    // Обработчик события для сохранения изменений строки
    const handleSaveRowChanges = () => {
      setIsEditMode(false);
      // Создаем новый массив данных, обновляя измененную строку
      const newData = rowsState.map((row) => {
        if (row.id === editedRow.id) {
          //пробегаемся по всем строкам и если находим редактируемую, то смотрти какое поле изменилось в editedRow
          if (editedRow.category_obj) row.category_obj = editedRow.category_obj;
          if (editedRow.name) row.name = editedRow.name;
          if (editedRow.floor) row.floor = editedRow.floor;
          if (editedRow.sq) row.sq = editedRow.sq;
          if (editedRow.town) row.town = editedRow.town;
          updateProject(editedRow);
        }
        return row;
      });
      //updateProject(newData);
      message.success("Изменения сохранены", 2.5);
      setRowsState(newData);
      setEditedRow(undefined);
    };

    // Обработчик события для редактирования строки
    const handleEdit = useCallback((rowID) => {
      setIsEditMode(true);
      setEditedRow(undefined);
      setRowIDToEdit(rowID);
    }, []);

    return (
      <tr className="table__row">
        <Id id={row.id} />
        <Actions
          row={row}
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          setRowIDToEdit={setRowIDToEdit}
          editedRow={editedRow}
          rowsState={rowsState}
          setRowsState={setRowsState}
          setIsEditMode={setIsEditMode}
          setEditedRow={setEditedRow}
          deleteProjects={deleteProjects}
          handleSaveRowChanges={handleSaveRowChanges}
        />
        <FileCheckbox
          row={row}
          rowsState={rowsState}
          updateProject={updateProject}
          setRowsState={setRowsState}
        />
        <CategoryObj
          row={row}
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          handleOnChangeType={handleOnChangeType}
        />
        <td className="table__name">
          {isEditMode && rowIDToEdit === row.id ? (
            <Input
              type="text"
              defaultValue={editedRow ? editedRow.name : row.name}
              id={row.id}
              style={{ width: 150 }}
              name="name"
              onChange={(e) => handleOnChangeField(e, row.id)}
            />
          ) : (
            row.name
          )}
        </td>
        <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Select
              onChange={(e) => handleOnChangeSelect(e, row.id, "floor")}
              name="floor"
              defaultValue={row.floor}
              style={{ width: 60 }}
              options={[
                { value: 1, label: "1" },
                { value: 2, label: "2" },
              ]}
            />
          ) : row.floor === 1 ? (
            "1"
          ) : (
            "2"
          )}
        </td>
        <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Input
              type="text"
              defaultValue={editedRow ? editedRow.sq : row.sq}
              id={row.id}
              name="sq"
              style={{ width: 90 }}
              onChange={(e) => handleOnChangeField(e, row.id)}
            />
          ) : (
            row.sq
          )}
        </td>
        <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Select
              onChange={(e) => {
                handleOnChangeSelect(e, row.id);
              }}
              name="town"
              defaultValue={row.town}
              style={{ width: 120 }}
              // если в editedRow поле type не равно home то ставим disabled
              disabled={
                row.category_obj !== "Готовый дом" ||
                (editedRow && editedRow.category_obj !== "Готовый дом")
              }
              options={[
                { value: "nasledie", label: "Наследие" },
                { value: "riga", label: "Riga life" },
              ]}
            />
          ) : (
            (() => {
              switch (row.town) {
                case "nasledie":
                  return "Наследие";
                case "riga":
                  return "Riga life";
                default:
                  return "";
              }
            })()
          )}
        </td>
        {/* )} */}
      </tr>
    );
  }
);

export default DashboardTableRow;
