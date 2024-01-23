import React, { useState, useEffect, memo, useCallback } from "react";
import { Table } from "react-bootstrap";
import {
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
  RollbackOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "./DashboardTableBody.css";
import { Popconfirm, message, Checkbox, Select, Input } from "antd";
import Filters from "../Filters/Filters";
import DashboardTableRow from "../DashboardTableRow/DashboardTableRow";

import {
  updateFile,
  updateProject,
  getProjects,
  deleteProjects,
} from "../../utils/api";

const DashboardTableBody = React.memo(
  ({ columns, actions, rowsState, setRowsState }) => {
    // // Состояние для определения, находится ли компонент в режиме редактирования или нет
    // const [isEditMode, setIsEditMode] = useState(false);
    // // Состояние для хранения идентификатора редактируемой строки
    // const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    // // Состояние для хранения измененной строки
    // const [editedRow, setEditedRow] = useState();

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
              <DashboardTableRow
                key={row.id}
                row={row}
                //isEditMode={isEditMode && rowIDToEdit === row.id}
                updateProject={updateProject}
                //setEditedRow={setEditedRow}
                //rowIDToEdit={rowIDToEdit}
                //handleSaveRowChanges={handleSaveRowChanges}
                //editedRow={editedRow}
                //handleEdit={handleEdit}
                deleteProjects={deleteProjects}
                rowsState={rowsState}
                setRowsState={setRowsState}
                actions={actions}
                //setIsEditMode={setIsEditMode}
              />
            );
          })}
        </tbody>
      </>
    );
  }
);

export default DashboardTableBody;
