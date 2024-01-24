import { Input } from "antd";
const Phone = ({
  row,
  isEditMode,
  rowIDToEdit,
  editedRow,
  handleOnChangeField,
}) => {
  return (
    <td>
      {isEditMode && rowIDToEdit === row.id ? (
        <Input
          type="text"
          prefix="+7 "
          defaultValue={editedRow ? editedRow.phone : row.phone}
          id={row.id}
          style={{ width: 125 }}
          name="phone"
          onChange={(e) => handleOnChangeField(e, row.id)}
        />
      ) : (
        row.phone
      )}
    </td>
  );
};

export default Phone;
