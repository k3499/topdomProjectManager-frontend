import { Select } from "antd";
const Renovation = ({ row, isEditMode, rowIDToEdit, handleOnChangeSelect }) => {
  return (
    <td>
      {isEditMode && rowIDToEdit === row.id ? (
        <Select
          onChange={(e) => {
            handleOnChangeSelect(e, row.id, "renovation");
          }}
          name="renovation"
          defaultValue={row.renovation}
          style={{ width: 160 }}
          options={[
            { value: "Требуется", label: "Требуется" },
            { value: "Дизайнерский", label: "Дизайнерский" },
          ]}
        />
      ) : (
        (() => {
          switch (row.renovation) {
            case "Требуется":
              return "Требуется";
            case "Дизайнерский":
              return "Дизайнерский";
            default:
              return "";
          }
        })()
      )}
    </td>
  );
};

export default Renovation;
