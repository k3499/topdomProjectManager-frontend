import React, { useState, useCallback } from "react";
import { Table } from "react-bootstrap";
import {
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
  RollbackOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "./DomclickTableBody.css";
import { Popconfirm, message, Checkbox, Select, Input } from "antd";
import Filters from "../Filters/Filters";
import DashboardTableRow from "../DashboardTableRow/DashboardTableRow";

import {
  updateFile,
  updateProject,
  getProjects,
  deleteProjects,
} from "../../utils/api";
import DomclickTableRow from "../DomclickTableRow/DomclickTableRow";

const DomclickTableBody = React.memo(
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

          {rowsState.map((row) => {
            return (
              <DomclickTableRow
                key={row.id}
                row={row}
                updateProject={updateProject}
                deleteProjects={deleteProjects}
                rowsState={rowsState}
                setRowsState={setRowsState}
                actions={actions}
              />
            );
          })}
        </tbody>
      </>
    );
  }
);

export default DomclickTableBody;
