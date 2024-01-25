import { Select } from "antd";
const WallsType = ({ row, isEditMode, rowIDToEdit, handleOnChangeSelect }) => {
  return (
    <td>
      {isEditMode && rowIDToEdit === row.id ? (
        <Select
          onChange={(e) => {
            handleOnChangeSelect(e, row.id, "wallsType");
          }}
          name="wallsType"
          defaultValue={row.wallsType}
          style={{ width: 160 }}
          options={[
            { value: "Кирпич", label: "Кирпич" },
            { value: "Газоблоки", label: "Газоблоки" },
            { value: "Пеноблоки", label: "Пеноблоки" },
            { value: "Сэндвич-панели", label: "Сэндвич-панели" },
            { value: "Ж/б панели", label: "Ж/б панели" },
            { value: "Экспериментальные материалы", label: "Эксп-е материалы" },
          ]}
        />
      ) : (
        (() => {
          switch (row.wallsType) {
            case "Кирпич":
              return "Кирпич";
            case "Газоблоки":
              return "Газоблоки";
            case "Пеноблоки":
              return "Пеноблоки";
            case "Сэндвич-панели":
              return "Сэндвич-панели";
            case "Ж/б панели":
              return "Ж/б панели";
            case "Экспериментальные материалы":
              return "Эксп-е материалы";
            default:
              return "";
          }
        })()
      )}
    </td>
  );
};

export default WallsType;
