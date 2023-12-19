import React, { useState, useEffect } from "react";
import { updateProject, getProjects, deleteProjects } from "../../utils/api";
import EditableTable from "../EditableTable/EditableTable";

function App() {
  const columns = [
    { field: "id", fieldName: "#" },
    { field: "firstName", fieldName: "First Name" },
    { field: "lastName", fieldName: "Last Name" },
    { field: "role", fieldName: "User's role" },
  ];
  const handleUpdateProject = (project) => {
    updateProject(project);
  };
  const handleUdeleteProjects = (project) => {
    deleteProjects(project);
  };

  let projects = getProjects();

  return (
    <>
      <EditableTable
        updateProject={handleUpdateProject}
        deleteProjects={handleUdeleteProjects}
        columns={columns}
        rows={projects}
        actions
      />
    </>
  );
}

export default App;
