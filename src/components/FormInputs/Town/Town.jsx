import { Select } from "antd";
const Town = ({
  row,
  isEditMode,
  rowIDToEdit,
  editedRow,
  handleOnChangeSelect,
}) => {
  return (
    <td>
      {isEditMode && rowIDToEdit === row.id ? (
        <Select
          onChange={(e) => {
            handleOnChangeSelect(e, row.id, "town");
          }}
          name="town"
          defaultValue={row.town}
          style={{ width: 120 }}
          // если в editedRow поле type не равно home то ставим disabled
          disabled={
            row.category_obj !== "Готовый дом" ||
            (editedRow && editedRow.category_obj !== "Готовый дом")
          }
          options={[
            { value: "nasledie", label: "Наследие" },
            { value: "riga", label: "Riga life" },
          ]}
        />
      ) : (
        (() => {
          switch (row.town) {
            case "nasledie":
              return "Наследие";
            case "riga":
              return "Riga life";
            default:
              return "";
          }
        })()
      )}
    </td>
  );
};

export default Town;
