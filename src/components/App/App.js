import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  updateFile,
  updateProject,
  getProjects,
  deleteProjects,
} from "../../utils/api";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import Header from "../Header/Header";
import FeedTable from "../FeedTable/FeedTable";

function App() {
  const colDashboard = [
    { field: "id", fieldName: "ID" },
    { field: "cian", fieldName: "Cian" },
    { field: "direct", fieldName: "Я.Директ" },
    { field: "avito", fieldName: "Avito" },
    { field: "type", fieldName: "Тип" },
    { field: "firstName", fieldName: "First Name" },
    { field: "lastName", fieldName: "Last Name" },
    { field: "role", fieldName: "User's role" },
  ];

  const columns = [
    { field: "id", fieldName: "ID" },
    { field: "type", fieldName: "Тип" },
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
  let cianProjects = getProjects("cian");

  return (
    <>
      <BrowserRouter>
        <div className='wrapper'>
          <Header />
          <main className='main'>
            <Routes>
              <Route
                path='*'
                element={
                  <Dashboard
                    updateFile={handleUpdateFile}
                    updateProject={handleUpdateProject}
                    deleteProjects={handleUdeleteProjects}
                    columns={colDashboard}
                    actions
                    rows={projects}
                  />
                }
              />
              <Route
                path='cian'
                element={
                  <FeedTable
                    updateFile={handleUpdateFile}
                    updateProject={handleUpdateProject}
                    deleteProjects={handleUdeleteProjects}
                    columns={columns}
                    rows={cianProjects}
                    actions
                    cian
                  />
                }
              />
              <Route
                path='direct'
                element={
                  <FeedTable
                    updateFile={handleUpdateFile}
                    updateProject={handleUpdateProject}
                    deleteProjects={handleUdeleteProjects}
                    columns={columns}
                    rows={projects}
                    actions
                  />
                }
              />
              <Route
                path='avito'
                element={
                  <FeedTable
                    updateFile={handleUpdateFile}
                    updateProject={handleUpdateProject}
                    deleteProjects={handleUdeleteProjects}
                    columns={columns}
                    rows={projects}
                    actions
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
