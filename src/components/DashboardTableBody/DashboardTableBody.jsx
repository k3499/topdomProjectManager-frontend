import React from "react";
import "./DashboardTableBody.css";
import DashboardTableRow from "../DashboardTableRow/DashboardTableRow";

import { updateProject, deleteProjects } from "../../utils/api";

const DashboardTableBody = React.memo(
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
              <DashboardTableRow
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

export default DashboardTableBody;
