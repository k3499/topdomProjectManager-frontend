import React, { useState, useCallback } from "react";
import { Table } from "react-bootstrap";
import {
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
  RollbackOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "./CianTableBody.css";
import { Popconfirm, message, Checkbox, Select, Input } from "antd";
import Filters from "../Filters/Filters";
import DashboardTableRow from "../DashboardTableRow/DashboardTableRow";

import {
  updateFile,
  updateProject,
  getProjects,
  deleteProjects,
} from "../../utils/api";
import CianTableRow from "../CianTableRow/CianTableRow";

const CianTableBody = React.memo(
  ({ columns, actions, rowsState, setRowsState }) => {
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

          {rowsState
            ? rowsState.map((row) => {
                return (
                  <CianTableRow
                    key={row.id}
                    row={row}
                    updateProject={updateProject}
                    deleteProjects={deleteProjects}
                    rowsState={rowsState}
                    setRowsState={setRowsState}
                    actions={actions}
                  />
                );
              })
            : null}
        </tbody>
      </>
    );
  }
);

export default CianTableBody;
