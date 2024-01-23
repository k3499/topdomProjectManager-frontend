import React, { useState } from "react";
import "./Filters.css";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AddProjectForm from "../AddProjectForm/AddProjectForm";

const Filters = ({ data, handlefilteredRows, columns, createProject }) => {
  const [isBlockVisible, setBlockVisible] = useState(false);
  const [dataAfterFilter, setDataAfterFilter] = useState(data);

  const handleSearch = (e) => {
    e.preventDefault();
    let search = e.target.value;

    if (search.trim() === "") {
      console.log("empty string");
      handlefilteredRows(data); // Возвращаем оригинальный data, если search пустая строка
      return;
    }

    const filteredData = dataAfterFilter.filter((item) => {
      let nameMatch, floorMatch;

      if (typeof item.name === "string" && typeof search === "string") {
        nameMatch = item.name.toLowerCase().includes(search.toLowerCase());
      } else {
        nameMatch = item.name === search;
      }

      if (typeof search === "string") {
        floorMatch = false;
      } else {
        floorMatch = item.floor === search;
      }

      return nameMatch || floorMatch;
    });

    handlefilteredRows(filteredData);

    console.log();
  };

  const toggleAddBlockVisibility = () => {
    setBlockVisible(!isBlockVisible);
  };

  return (
    <>
      <div className="filters__wrapper">
        <Input
          onChange={handleSearch}
          placeholder="Поиск..."
          prefix={<SearchOutlined />}
          className="input__search"
        />
        <Button
          onClick={toggleAddBlockVisibility}
          type="primary"
          className="addButton"
        >
          Добавить
        </Button>
      </div>

      <AddProjectForm
        isBlockVisible={isBlockVisible}
        columns={columns}
        toggleAddBlockVisibility={toggleAddBlockVisibility}
        createProject={createProject}
      />
    </>
  );
};

export default Filters;
