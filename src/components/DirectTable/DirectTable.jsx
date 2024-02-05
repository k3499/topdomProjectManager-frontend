import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Table } from "react-bootstrap";
import Filters from "../Filters/Filters";
import DirectTableBody from "../DirectTableBody/DirectTableBody";

import { getProjects, createProject } from "../../utils/api";

const DirectTable = ({
  pageTitle,
  updateProject,
  deleteProjects,
  columns,
  actions,
  feedName,
}) => {
  // Состояние для хранения данных строк таблицы
  const [rowsState, setRowsState] = useState([]);
  // Состояние для определения, находится ли компонент в режиме редактирования или нет
  const [isEditMode, setIsEditMode] = useState(false);
  // Используйте useMemo для мемоизации массива строк
  const memoizedRowsState = useMemo(() => rowsState, [rowsState]);

  // Используйте useCallback для мемоизации функции setRowsState
  const memoizedSetRowsState = useCallback(
    (newRowsState) => {
      setRowsState(newRowsState);
    },
    [setRowsState]
  );

  useEffect(() => {
    fetchData(feedName);
  }, []);

  async function fetchData(site) {
    try {
      const data = await getProjects(site);
      // Установите данные в состояние rows
      setRowsState(data);
    } catch (error) {
      // Обработка ошибок
      console.error(error);
    }
  }

  function filteredRows(rows) {
    console.log(rows);
    setRowsState(rows);
  }
  return (
    <>
      <h1>{pageTitle}</h1>
      <Filters
        data={rowsState}
        handlefilteredRows={filteredRows}
        columns={columns}
        createProject={createProject}
        xmlName={"direct"}
      />
      <Table striped bordered hover className="table">
        <thead className="table__head">
          <tr>
            {/* Отображаем заголовки столбцов */}
            {columns.map((column, index) => {
              if (index === 1) {
                //пустая шапка под actions
                return (
                  <React.Fragment key={column.field + index}>
                    <th key={"blank"}></th>
                    {/* Добавлен ключ к заголовку столбца */}
                    <th key={column.field}>{column.fieldName}</th>
                  </React.Fragment>
                );
              } else {
                // Добавлен ключ к заголовку столбца
                return <th key={column.field}>{column.fieldName}</th>;
              }
            })}
          </tr>
        </thead>
        <DirectTableBody
          columns={columns}
          actions={actions}
          rowsState={memoizedRowsState}
          setRowsState={memoizedSetRowsState}
          updateProject={updateProject}
          deleteProjects={deleteProjects}
          isEditMode={isEditMode}
        />
      </Table>
    </>
  );
};

export default DirectTable;
