import React, { useState, useEffect } from "react";
import {
  updateFile,
  updateProject,
  getProjects,
  deleteProjects,
} from "../../utils/api";
import EditableTable from "../EditableTable/EditableTable";
import "./App.css";
import Header from "../Header/Header";

function App() {
  const columns = [
    { field: "cian", fieldName: "Cian" },
    { field: "direct", fieldName: "Я.Директ" },
    { field: "avito", fieldName: "Avito" },
    { field: "type", fieldName: "Тип" },
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

  const handleUpdateFile = (project) => {
    updateFile(project);
  };
  let projects = getProjects();
  return (
    <>
      <div className='wrapper'>
        <Header />
        <main className='main'>
          <EditableTable
            updateFile={handleUpdateFile}
            updateProject={handleUpdateProject}
            deleteProjects={handleUdeleteProjects}
            columns={columns}
            rows={projects}
            actions
          />
        </main>
      </div>
    </>
  );
}

export default App;
