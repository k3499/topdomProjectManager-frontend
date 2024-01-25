import React from "react";
import DirectTableRow from "../DirectTableRow/DirectTableRow";

import { updateProject, deleteProjects } from "../../utils/api";

const DirectTableBody = React.memo(
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
              <DirectTableRow
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

export default DirectTableBody;
