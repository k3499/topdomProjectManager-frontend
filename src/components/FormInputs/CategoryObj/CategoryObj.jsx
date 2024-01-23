import { Select } from "antd";
const CategoryObj = ({ row, isEditMode, rowIDToEdit, handleOnChangeType }) => {
  return (
    <td>
      {isEditMode && rowIDToEdit === row.id ? (
        <Select
          onChange={(e) => handleOnChangeType(e, row.id)}
          name="category_obj"
          defaultValue={row.category_obj}
          style={{ width: 130 }}
          options={[
            { value: "Проект", label: "Проект" },
            { value: "Готовый дом", label: "Готовый дом" },
            { value: "Участок", label: "Участок" },
          ]}
        />
      ) : (
        (() => {
          switch (row.category_obj) {
            case "Проект":
              return "Проект";
            case "Готовый дом":
              return "Готовый дом";
            case "Участок":
              return "Участок";
            default:
              return "";
          }
        })()
      )}
    </td>
  );
};

export default CategoryObj;
