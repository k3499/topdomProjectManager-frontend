import { Input } from "antd";
const Cadastr = ({
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
          defaultValue={
            editedRow ? editedRow.cadastr_number : row.cadastr_number
          }
          id={row.id}
          name="cadastr_number"
          onChange={(e) => handleOnChangeField(e, row.id)}
        />
      ) : (
        row.cadastr_number
      )}
    </td>
  );
};

export default Cadastr;
