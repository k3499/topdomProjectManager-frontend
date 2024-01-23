import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Table } from "react-bootstrap";
import {
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
  RollbackOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "./Dashboard.css";
import { Popconfirm, message, Checkbox, Select, Input } from "antd";
import Filters from "../Filters/Filters";
import DashboardTableBody from "../DashboardTableBody/DashboardTableBody";

import {
  updateFile,
  updateProject,
  getProjects,
  deleteProjects,
  createProject,
} from "../../utils/api";

const Dashboard = ({
  updateFile,
  updateProject,
  deleteProjects,
  columns,
  actions,
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
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await getProjects();
      // Установите данные в состояние rows
      setRowsState(data);
      console.log(data);
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
          isEditMode={isEditMode}
          //setIsEditMode={setIsEditMode}
        />
      </Table>
    </>
  );
};

export default Dashboard;
