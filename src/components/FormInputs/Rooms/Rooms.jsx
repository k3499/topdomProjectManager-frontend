import { Select } from "antd";
const Rooms = ({ row, isEditMode, rowIDToEdit, handleOnChangeSelect }) => {
  return (
    <td>
      {isEditMode && rowIDToEdit === row.id ? (
        <Select
          onChange={(e) => {
            handleOnChangeSelect(e, row.id, "rooms");
          }}
          name="rooms"
          defaultValue={row.rooms}
          style={{ width: 160 }}
          options={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
            { value: "8", label: "8" },
            { value: "9", label: "9" },
            { value: "10", label: "10" },
          ]}
        />
      ) : (
        (() => {
          switch (row.rooms) {
            case "1":
              return "1";
            case "2":
              return "2";
            case "3":
              return "3";
            case "4":
              return "4";
            case "5":
              return "5";
            case "6":
              return "6";
            case "7":
              return "7";
            case "8":
              return "8";
            case "9":
              return "9";
            case "10":
              return "10";
            default:
              return "";
          }
        })()
      )}
    </td>
  );
};

export default Rooms;
