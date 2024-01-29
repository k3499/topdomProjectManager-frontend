import React, { useState } from "react";
import "./Filters.css";
import { Button } from "antd";
import AddProjectForm from "../AddProjectForm/AddProjectForm";
import Search from "../Search/Search";

const Filters = ({ data, handlefilteredRows, columns, createProject }) => {
  const [isBlockVisible, setBlockVisible] = useState(false);

  const toggleAddBlockVisibility = () => {
    setBlockVisible(!isBlockVisible);
  };

  return (
    <>
      <div className="filters__wrapper">
        <Search data={data} handlefilteredRows={handlefilteredRows} />
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
