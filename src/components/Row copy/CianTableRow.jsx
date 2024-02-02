import React, { useState } from "react";
import "./CianTableRow.css";
import { message, Input } from "antd";
import Id from "../FormInputs/Id/Id";
import Actions from "../FormInputs/Actions/Actions";
import CategoryObj from "../FormInputs/CategoryObj/CategoryObj";
import Name from "../FormInputs/Name/Name";
import Floor from "../FormInputs/Floor/Floor";
import Size from "../FormInputs/Size/Size";
import Town from "../FormInputs/Town/Town";
import Address from "../FormInputs/Address/Address";
import Phone from "../FormInputs/Phone/Phone";
import Cadastr from "../FormInputs/Cadastr/Cadastr";
import AreaLand from "../FormInputs/AreaLand/AreaLand";
import Price from "../FormInputs/Price/Price";
import Description from "../FormInputs/Description/Description";

const CianTableRow = React.memo(
  ({ rowsState, setRowsState, updateProject, row, deleteProjects }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    const [editedRow, setEditedRow] = useState();

    // Обработчик события для изменения значения выпадающего списка
    const handleOnChangeType = (e, rowID) => {
      //Обновляем состояние редактируемой строки
      console.log({
        id: rowID,
        type: e,
      });
      setEditedRow((prevRow) => ({
        ...(prevRow && prevRow.id ? prevRow : { id: rowID }),
        type: e,
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
        <Name
          row={row}
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          handleOnChangeField={handleOnChangeField}
        />
        <Floor
          row={row}
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          handleOnChangeSelect={handleOnChangeSelect}
        />
        <Size
          row={row}
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          handleOnChangeField={handleOnChangeField}
          editedRow={editedRow}
        />
        <Town
          row={row}
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          handleOnChangeSelect={handleOnChangeSelect}
        />
        <Address
          row={row}
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          editedRow={editedRow}
          handleOnChangeField={handleOnChangeField}
        />
        <Phone
          row={row}
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          editedRow={editedRow}
          handleOnChangeField={handleOnChangeField}
        />
        <Cadastr
          row={row}
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          editedRow={editedRow}
          handleOnChangeField={handleOnChangeField}
        />
        <AreaLand
          row={row}
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          editedRow={editedRow}
          handleOnChangeField={handleOnChangeField}
        />
        <Price
          row={row}
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          editedRow={editedRow}
          handleOnChangeField={handleOnChangeField}
        />
        <Description
          row={row}
          isEditMode={isEditMode}
          rowIDToEdit={rowIDToEdit}
          editedRow={editedRow}
          handleOnChangeField={handleOnChangeField}
        />
      </tr>
    );
  }
);

export default CianTableRow;
