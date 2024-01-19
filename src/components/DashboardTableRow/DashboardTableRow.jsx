import React, { useState, useEffect, memo, useCallback } from "react";
import "./DashboardTableRow.css";
import { Popconfirm, message, Checkbox, Select, Input } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
  RollbackOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const DashboardTableRow = React.memo(
  ({
    columns,
    actions,
    rowsState,
    setRowsState,
    updateProject,
    setEditedRow,
    row,
    rowIDToEdit,
    handleSaveRowChanges,
    editedRow,
    handleEdit,
    deleteProjects,
    isEditMode,
    setIsEditMode,
  }) => {
    const handleChange = (e, rowID, status, fieldName, row) => {
      //обработчик клика по чекбоксу выбора файла для сохранения
      e.target.checked ? (status = false) : (status = true);
      e.target.checked = status;

      const newFileData = {
        id: rowID,
        [fieldName]: !e.target.checked,
      };

      // Обновляем значение `status` в состоянии строки `row`
      const updatedRow = {
        ...row,
        [fieldName]: !status,
      };
      // Обновляем состояние строк
      const updatedRows = rowsState.map((r) => {
        if (r.id === rowID) {
          return updatedRow;
        }
        return r;
      });

      const dataToUpdate = {
        id: rowID,
        [fieldName]: status ? 0 : 1,
      };
      console.log(updatedRows);
      updateProject(dataToUpdate);
      setRowsState(updatedRows);
    };

    // Обработчик события для изменения значения выпадающего списка
    const handleOnChangeType = (e, rowID) => {
      //Обновляем состояние редактируемой строки
      console.log({
        id: rowID,
        type: e,
      });
      setEditedRow((prevRow) => ({
        ...(prevRow && prevRow.id ? prevRow : { id: rowID }),
        type: e,
      }));
    };

    // Обработчик события для изменения значения поля
    const handleOnChangeField = (e, rowID) => {
      const { name: fieldName, value } = e.target;
      //Обновляем состояние редактируемой строки
      // console.log({
      //   id: rowID,
      //   [fieldName]: value,
      // });
      setEditedRow((prevRow) => ({
        ...(prevRow && prevRow.id ? prevRow : { id: rowID }), // проверяем наличие prevRow и id
        [fieldName]: value,
      }));
    };

    // Обработчик события для изменения значения выпадающего списка
    const handleOnChangeSelect = (e, rowID, name) => {
      //Обновляем состояние редактируемой строки
      setEditedRow((prevRow) => ({
        ...(prevRow && prevRow.id ? prevRow : { id: rowID }),
        [name]: e,
      }));
    };

    const cancelRemove = (e) => {
      message.error("Удаление отменено");
    };

    // Обработчик события для отмены редактирования строки
    const handleCancelEditing = () => {
      setIsEditMode(false);
      setEditedRow(undefined);
    };

    // Обработчик события для удаления строки
    const handleRemoveRow = (rowID) => {
      // Создаем новый массив данных, исключая удаляемую строку
      const newData = rowsState.filter((row) => {
        if (row.id !== rowID) {
          return row;
        } else {
          deleteProjects(row);
          message.success(`Проект${` "${row.name}"`} был удален`);
          return null;
        }
      });
      setRowsState(newData);
    };

    return (
      <tr className="table__row">
        <td className="table__id">{row.id}</td>
        {actions && (
          <td className="table__actions">
            {/* Кнопка сохранения изменений */}
            {isEditMode && rowIDToEdit === row.id ? (
              <button
                onClick={() => handleSaveRowChanges()}
                className="custom-table__action-btn"
                disabled={!editedRow}
              >
                <SaveOutlined style={{ fontSize: "13px", color: "#646464" }} />
              </button>
            ) : (
              <button
                onClick={() => handleEdit(row.id)}
                className="custom-table__action-btn"
              >
                <EditOutlined style={{ fontSize: "13px", color: "#646464" }} />
              </button>
            )}

            {/* Кнопка отмены редактирования */}
            {isEditMode && rowIDToEdit === row.id ? (
              <button
                onClick={() => handleCancelEditing()}
                className="custom-table__action-btn"
              >
                <RollbackOutlined
                  style={{ fontSize: "13px", color: "#646464" }}
                />
              </button>
            ) : (
              <Popconfirm
                title="Удаление проекта"
                description="Уверены, что хотите удалить проект?"
                onConfirm={() => handleRemoveRow(row.id)}
                onCancel={cancelRemove}
                okText="Да"
                cancelText="Отмена"
                icon={<InfoCircleOutlined style={{ color: "red" }} />}
              >
                <button className="custom-table__action-btn">
                  <DeleteOutlined
                    style={{ fontSize: "13px", color: "#646464" }}
                  />
                </button>
              </Popconfirm>
            )}
          </td>
        )}
        <td className="table__checkbox">
          <Checkbox
            checked={!!row.is_cian}
            onChange={(e) =>
              handleChange(e, row.id, row.is_cian, "is_cian", row)
            }
          >
            {row.cian}
          </Checkbox>
        </td>
        <td className="table__checkbox">
          <Checkbox
            checked={!!row.is_direct}
            onChange={(e) =>
              handleChange(e, row.id, row.is_direct, "is_direct", row)
            }
          >
            {row.direct}
          </Checkbox>
        </td>
        <td className="table__checkbox">
          <Checkbox
            checked={!!row.is_avito}
            onChange={(e) =>
              handleChange(e, row.id, row.is_avito, "is_avito", row)
            }
          >
            {row.avito}
          </Checkbox>
        </td>
        <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Select
              onChange={(e) => handleOnChangeType(e, row.id)}
              name="type"
              defaultValue={row.category_obj}
              style={{ width: 130 }}
              options={[
                { value: "project", label: "Проект" },
                { value: "home", label: "Готовый дом" },
                { value: "plot", label: "Участок" },
              ]}
            />
          ) : (
            (() => {
              switch (row.category_obj) {
                case "project":
                  return "Проект";
                case "Готовый дом":
                  return "Готовый дом";
                case "plot":
                  return "Участок";
                default:
                  return "";
              }
            })()
          )}
        </td>

        <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Input
              type="text"
              defaultValue={editedRow ? editedRow.name : row.name}
              id={row.id}
              name="name"
              onChange={(e) => handleOnChangeField(e, row.id)}
            />
          ) : (
            row.name
          )}
        </td>
        <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Select
              onChange={(e) => handleOnChangeSelect(e, row.id, "floor")}
              name="floor"
              defaultValue={row.floor}
              style={{ width: 60 }}
              options={[
                { value: 1, label: "1" },
                { value: 2, label: "2" },
              ]}
            />
          ) : row.floor === 1 ? (
            "1"
          ) : (
            "2"
          )}
        </td>
        <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Input
              type="text"
              defaultValue={editedRow ? editedRow.sq : row.sq}
              id={row.id}
              name="size"
              style={{ width: 90 }}
              onChange={(e) => handleOnChangeField(e, row.id)}
            />
          ) : (
            row.sq
          )}
        </td>
        <td>
          {isEditMode && rowIDToEdit === row.id ? (
            <Select
              onChange={(e) => {
                handleOnChangeSelect(e, row.id);
              }}
              name="town"
              defaultValue={row.town}
              style={{ width: 120 }}
              // если в editedRow поле type не равно home то ставим disabled
              disabled={
                row.type !== "home" || (editedRow && editedRow.type !== "home")
              }
              options={[
                { value: "nasledie", label: "Наследие" },
                { value: "riga", label: "Riga life" },
              ]}
            />
          ) : (
            (() => {
              switch (row.town) {
                case "nasledie":
                  return "Наследие";
                case "riga":
                  return "Riga life";
                default:
                  return "";
              }
            })()
          )}
        </td>
        {/* )} */}
      </tr>
    );
  }
);

export default DashboardTableRow;
