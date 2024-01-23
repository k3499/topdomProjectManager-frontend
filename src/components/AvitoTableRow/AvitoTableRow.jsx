import React, { useEffect, useState } from "react";
import "./AvitoTableRow.css";
import { message, Select, Input } from "antd";
import Address from "./../Address/Address";
import Id from "../FormInputs/Id/Id";
import Actions from "../FormInputs/Actions/Actions";
import CategoryObj from "../FormInputs/CategoryObj/CategoryObj";

const { TextArea } = Input;
const AvitoTableRow = React.memo(
  ({ rowsState, setRowsState, updateProject, row, deleteProjects }) => {
    const [editedRow, setEditedRow] = useState();
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    const [isEditMode, setIsEditMode] = useState(false);

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
      console.log(editedRow);
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
        console.log(editedRow, row.id);
        if (row.id === editedRow.id) {
          //пробегаемся по всем строкам и если находим редактируемую, то смотрти какое поле изменилось в editedRow
          if (editedRow.category_obj) row.category_obj = editedRow.category_obj;
          if (editedRow.name) row.name = editedRow.name;
          if (editedRow.floors) row.floors = editedRow.floors;
          if (editedRow.sq) row.sq = editedRow.sq;
          if (editedRow.town) row.town = editedRow.town;
          if (editedRow.address) row.address = editedRow.address;
          if (editedRow.phone) row.phone = editedRow.phone;
          if (editedRow.cadastr_number)
            row.cadastr_number = editedRow.cadastr_number;
          if (editedRow.area_land) row.area_land = editedRow.area_land;
          if (editedRow.price) row.price = editedRow.price;
          if (editedRow.description) row.description = editedRow.description;
          updateProject(editedRow);
        }
        return row;
      });
      //updateProject(newData);
      message.success("Изменения сохранены", 2.5);
      setRowsState(newData);
      setEditedRow(undefined);
    };
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
        <Address row isEditMode rowIDToEdit editedRow handleOnChangeField />
        {/* <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Input
              type="text"
              defaultValue={editedRow ? editedRow.address : row.address}
              id={row.id}
              name="address"
              onChange={(e) => handleOnChangeField(e, row.id)}
            />
          ) : (
            row.address
          )}
        </td> */}
        <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Input
              type="text"
              prefix="+7 "
              defaultValue={editedRow ? editedRow.phone : row.phone}
              id={row.id}
              style={{ width: 125 }}
              name="phone"
              onChange={(e) => handleOnChangeField(e, row.id)}
            />
          ) : (
            row.phone
          )}
        </td>
        <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Input
              type="text"
              defaultValue={
                editedRow ? editedRow.cadastr_number : row.cadastr_number
              }
              id={row.id}
              name="cadastr_number"
              onChange={(e) => handleOnChangeField(e, row.id)}
            />
          ) : (
            row.cadastr_number
          )}
        </td>
        <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Input
              type="text"
              defaultValue={editedRow ? editedRow.area_land : row.area_land}
              id={row.id}
              style={{ width: 70 }}
              name="area_land"
              onChange={(e) => handleOnChangeField(e, row.id)}
            />
          ) : (
            row.area_land
          )}
        </td>
        <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Input
              type="text"
              defaultValue={editedRow ? editedRow.price : row.price}
              id={row.id}
              style={{ width: 100 }}
              prefix="₽"
              name="price"
              onChange={(e) => handleOnChangeField(e, row.id)}
            />
          ) : (
            row.price
          )}
        </td>
        <td className="table__description">
          {isEditMode && rowIDToEdit === row.id ? (
            <TextArea
              type="textarea"
              defaultValue={editedRow ? editedRow.description : row.description}
              id={row.id}
              style={{ width: 200 }}
              rows={1}
              name="description"
              onChange={(e) => handleOnChangeField(e, row.id)}
            />
          ) : (
            row.description
          )}
        </td>
      </tr>
    );
  }
);

export default AvitoTableRow;
