import { Input } from "antd";
const AreaLand = ({
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
          defaultValue={editedRow ? editedRow.area_land : row.area_land}
          id={row.id}
          style={{ width: 70 }}
          name="area_land"
          onChange={(e) => handleOnChangeField(e, row.id)}
        />
      ) : (
        row.area_land
      )}
    </td>
  );
};

export default AreaLand;
