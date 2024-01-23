import { Select } from "antd";
const Floor = ({ row, isEditMode, rowIDToEdit, handleOnChangeSelect }) => {
  return (
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
  );
};

export default Floor;
