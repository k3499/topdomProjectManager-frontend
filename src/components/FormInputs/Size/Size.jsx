import { Input } from "antd";
const Size = ({
  row,
  isEditMode,
  rowIDToEdit,
  handleOnChangeField,
  editedRow,
}) => {
  return (
    <td>
      {isEditMode && rowIDToEdit === row.id ? (
        <Input
          type="text"
          defaultValue={editedRow ? editedRow.sq : row.sq}
          id={row.id}
          name="sq"
          style={{ width: 90 }}
          onChange={(e) => handleOnChangeField(e, row.id)}
        />
      ) : (
        row.sq
      )}
    </td>
  );
};

export default Size;
