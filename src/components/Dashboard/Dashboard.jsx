import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Table } from "react-bootstrap";
import "./Dashboard.css";
import Filters from "../Filters/Filters";
import DashboardTableBody from "../DashboardTableBody/DashboardTableBody";

import { getProjects, createProject } from "../../utils/api";

const Dashboard = ({ updateProject, deleteProjects, columns, actions }) => {
  // Состояние для хранения данных строк таблицы
  const [rowsState, setRowsState] = useState([]);
  // useMemo для мемоизации массива строк
  const memoizedRowsState = useMemo(() => rowsState, [rowsState]);

  // useCallback для мемоизации функции setRowsState
  const memoizedSetRowsState = useCallback(
    (newRowsState) => {
      setRowsState(newRowsState);
    },
    [setRowsState]
  );

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await getProjects();
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
      <Filters
        data={rowsState}
        handlefilteredRows={filteredRows}
        columns={columns}
        createProject={createProject}
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

        <DashboardTableBody
          columns={columns}
          actions={actions}
          rowsState={memoizedRowsState}
          setRowsState={memoizedSetRowsState}
          updateProject={updateProject}
          deleteProjects={deleteProjects}
        />
      </Table>
    </>
  );
};

export default Dashboard;
