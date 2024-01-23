import {
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
  RollbackOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

import { Popconfirm, message } from "antd";
const Actions = ({
  row,
  isEditMode,
  rowIDToEdit,
  setRowIDToEdit,
  editedRow,
  setRowsState,
  setIsEditMode,
  setEditedRow,
  rowsState,
  deleteProjects,
  handleSaveRowChanges,
}) => {
  // Обработчик события для отмены редактирования строки
  const handleCancelEditing = () => {
    setIsEditMode(false);
    setEditedRow(undefined);
  };

  const cancelRemove = (e) => {
    message.error("Удаление отменено");
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

  // Обработчик события для редактирования строки
  const handleEdit = (rowID) => {
    setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(rowID);
  };

  return (
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
          <RollbackOutlined style={{ fontSize: "13px", color: "#646464" }} />
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
            <DeleteOutlined style={{ fontSize: "13px", color: "#646464" }} />
          </button>
        </Popconfirm>
      )}
    </td>
  );
};

export default Actions;
