import { Input } from "antd";
const Name = ({
  row,
  isEditMode,
  rowIDToEdit,
  editedRow,
  handleOnChangeField,
}) => {
  return (
    <td className="table__name">
      {isEditMode && rowIDToEdit === row.id ? (
        <Input
          type="text"
          defaultValue={editedRow ? editedRow.name : row.name}
          id={row.id}
          style={{ width: 150 }}
          name="name"
          onChange={(e) => handleOnChangeField(e, row.id)}
        />
      ) : row.name ? (
        row.name
      ) : (
        row.category_obj + " " + row.floor + "." + row.number
      )}
    </td>
  );
};

export default Name;
