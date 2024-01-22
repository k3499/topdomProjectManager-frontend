import React, { useState, useEffect, memo, useCallback } from "react";
import "./AvitoTableBody.css";
import { Popconfirm, message, Checkbox, Select, Input } from "antd";
import Filters from "../Filters/Filters";
import DashboardTableRow from "../DashboardTableRow/DashboardTableRow";

import {
  updateFile,
  updateProject,
  getProjects,
  deleteProjects,
} from "../../utils/api";
import AvitoTableRow from "../AvitoTableRow/AvitoTableRow";

const AvitoTableBody = React.memo(
  ({ columns, actions, rowsState, setRowsState }) => {
    // Состояние для определения, находится ли компонент в режиме редактирования или нет
    const [isEditMode, setIsEditMode] = useState(false);
    // Состояние для хранения идентификатора редактируемой строки
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    // Состояние для хранения измененной строки
    const [editedRow, setEditedRow] = useState();

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

    // Обработчик события для редактирования строки
    const handleEdit = useCallback((rowID) => {
      setIsEditMode(true);
      setEditedRow(undefined);
      setRowIDToEdit(rowID);
    }, []);

    return (
      <>
        <tbody>
          {rowsState.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} className="table__no-data">
                Ничего не найдено
              </td>
            </tr>
          )}

          {rowsState.map((row) => {
            return (
              <AvitoTableRow
                key={row.id}
                row={row}
                isEditMode={isEditMode && rowIDToEdit === row.id}
                updateProject={updateProject}
                setEditedRow={setEditedRow}
                rowIDToEdit={rowIDToEdit}
                handleSaveRowChanges={handleSaveRowChanges}
                editedRow={editedRow}
                handleEdit={handleEdit}
                deleteProjects={deleteProjects}
                rowsState={rowsState}
                setRowsState={setRowsState}
                actions={actions}
                setIsEditMode={setIsEditMode}
              />
            );
          })}
        </tbody>
      </>
    );
  }
);

export default AvitoTableBody;
