import { Input } from "antd";
const Address = ({
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
          defaultValue={editedRow ? editedRow.address : row.address}
          id={row.id}
          name="address"
          onChange={(e) => handleOnChangeField(e, row.id)}
        />
      ) : (
        row.address
      )}
    </td>
  );
};

export default Address;
