import { Checkbox } from "antd";
const FileCheckbox = ({ row, rowsState, updateProject, setRowsState }) => {
  const handleChange = (e, rowID, status, fieldName, row) => {
    //обработчик клика по чекбоксу выбора файла для сохранения
    e.target.checked ? (status = false) : (status = true);
    e.target.checked = status;
    console.log(rowID);
    // Обновляем значение `status` в состоянии строки `row`
    const updatedRow = {
      ...row,
      [fieldName]: !status,
    };
    // Обновляем состояние строк
    const updatedRows = rowsState.map((r) => {
      if (r.id === rowID) {
        return updatedRow;
      }
      return r;
    });

    const dataToUpdate = {
      id: rowID,
      [fieldName]: status ? 0 : 1,
    };
    console.log(updatedRows);
    updateProject(dataToUpdate);
    setRowsState(updatedRows);
  };

  return (
    <>
      <td className="table__checkbox">
        <Checkbox
          checked={!!row.is_cian}
          onChange={(e) => handleChange(e, row.id, row.is_cian, "is_cian", row)}
        >
          {row.cian}
        </Checkbox>
      </td>
      <td className="table__checkbox">
        <Checkbox
          checked={!!row.is_direct}
          onChange={(e) =>
            handleChange(e, row.id, row.is_direct, "is_direct", row)
          }
        >
          {row.direct}
        </Checkbox>
      </td>
      <td className="table__checkbox">
        <Checkbox
          checked={!!row.is_avito}
          onChange={(e) =>
            handleChange(e, row.id, row.is_avito, "is_avito", row)
          }
        >
          {row.avito}
        </Checkbox>
      </td>
      <td className="table__checkbox">
        <Checkbox
          checked={!!row.is_domclick}
          onChange={(e) =>
            handleChange(e, row.id, row.is_domclick, "is_domclick", row)
          }
        >
          {row.domclick}
        </Checkbox>
      </td>
    </>
  );
};

export default FileCheckbox;
