import React, { useState, useEffect, memo, useCallback } from "react";
import "./AvitoTableBody.css";
import { Popconfirm, message, Checkbox, Select, Input } from "antd";
import Filters from "../Filters/Filters";

import {
  updateFile,
  updateProject,
  getProjects,
  deleteProjects,
} from "../../utils/api";
import AvitoTableRow from "../AvitoTableRow/AvitoTableRow";

const AvitoTableBody = React.memo(
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
              <AvitoTableRow
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

export default AvitoTableBody;
