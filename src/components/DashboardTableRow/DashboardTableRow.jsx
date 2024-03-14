import React, { useState, useCallback } from "react";
import "./DashboardTableRow.css";
import { message, Collapse } from "antd";

import Id from "../FormInputs/Id/Id";
import Actions from "../FormInputs/Actions/Actions";
import FileCheckbox from "../FormInputs/FileCheckbox/FileCheckbox";
import CategoryObj from "../FormInputs/CategoryObj/CategoryObj";
import Name from "../FormInputs/Name/Name";
import Floor from "../FormInputs/Floor/Floor";
import Size from "../FormInputs/Size/Size";
import Town from "../FormInputs/Town/Town";
import ImageSpoiler from "../FormInputs/ImageSpoilerBtn/ImageSpoilerBtn";
import ImageLoader from "../FormInputs/ImageLoader/ImageLoader";
import Link from "../FormInputs/Link/Link";

const DashboardTableRow = React.memo(
  ({ rowsState, setRowsState, updateProject, row, deleteProjects }) => {
    // Состояние для определения, находится ли компонент в режиме редактирования или нет
    const [isEditMode, setIsEditMode] = useState(false);
    // Состояние для хранения идентификатора редактируемой строки
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    // Состояние для хранения измененной строки
    const [editedRow, setEditedRow] = useState();
    // Состояние для хранения типа объекта
    const [type, setType] = useState(row.category_obj);
    // Состояние статуса спойлера картинок
    const [imageSpoilerStatus, setImageSpoilerStatus] = useState(false);
    // Состояние статуса спойлера картинок
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
      setRowsState(newData);
      setEditedRow(undefined);
    };

    return (
      <>
        <tr className="table__row">
          <Id id={rowsState.indexOf(row) + 1} />
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
            setType={setType}
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
            type={type}
            isEditMode={isEditMode}
            rowIDToEdit={rowIDToEdit}
            handleOnChangeSelect={handleOnChangeSelect}
          />
          <ImageSpoiler
            row={row}
            imageSpoilerStatus={imageSpoilerStatus}
            setImageSpoilerStatus={setImageSpoilerStatus}
          />
          {row.category_obj !== "Участок" && (
            <Link
              row={row}
              link={
                row.floor === 1
                  ? "/stroitelstvo-odnoehtazhnyh-domov-pod-klyuch-proekty-i-ceny/"
                  : "/stroitelstvo-dvuhehtazhnyh-domov-pod-klyuch-proekty-i-ceny/"
              }
            />
          )}
        </tr>

        {imageSpoilerStatus && <ImageLoader id={row.id} />}
      </>
    );
  }
);

export default DashboardTableRow;
