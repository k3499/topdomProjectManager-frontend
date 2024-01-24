import { Input } from "antd";
const Price = ({
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
          defaultValue={editedRow ? editedRow.price : row.price}
          id={row.id}
          style={{ width: 100 }}
          prefix="₽"
          name="price"
          onChange={(e) => handleOnChangeField(e, row.id)}
        />
      ) : (
        row.price
      )}
    </td>
  );
};

export default Price;
