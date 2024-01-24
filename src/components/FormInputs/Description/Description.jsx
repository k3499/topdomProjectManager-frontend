import { Input } from "antd";
const { TextArea } = Input;
const Description = ({
  row,
  isEditMode,
  rowIDToEdit,
  editedRow,
  handleOnChangeField,
}) => {
  return (
    <td className="table__description">
      {isEditMode && rowIDToEdit === row.id ? (
        <TextArea
          type="textarea"
          defaultValue={editedRow ? editedRow.description : row.description}
          id={row.id}
          style={{ width: 200 }}
          rows={1}
          name="description"
          onChange={(e) => handleOnChangeField(e, row.id)}
        />
      ) : (
        row.description
      )}
    </td>
  );
};

export default Description;
