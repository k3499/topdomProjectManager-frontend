import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  updateFile,
  updateProject,
  getProjects,
  deleteProjects,
} from "../../utils/api";
import {
  colDashboard,
  colCian,
  colAvito,
  pageTitle,
} from "../../utils/constants";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import Header from "../Header/Header";
import CianTable from "../CianTable/CianTable";
import AvitoTable from "../AvitoTable/AvitoTable";

function App() {
  const [addProjectVisible, setAddProjectVisible] = useState(false);

  const handleUpdateProject = (project) => {
    updateProject(project);
  };
  const handledeleteProjects = (project) => {
    deleteProjects(project);
  };

  const handleUpdateFile = (project) => {
    updateFile(project);
  };

  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <main className="main">
            <Routes>
              <Route
                path="*"
                element={
                  <Dashboard
                    updateFile={handleUpdateFile}
                    updateProject={handleUpdateProject}
                    deleteProjects={handledeleteProjects}
                    columns={colDashboard}
                    actions
                  />
                }
              />
              <Route
                path="cian"
                element={
                  <CianTable
                    pageTitle={pageTitle.cian}
                    updateFile={handleUpdateFile}
                    updateProject={handleUpdateProject}
                    deleteProjects={handledeleteProjects}
                    columns={colCian}
                    actions
                    feedName="cian"
                  />
                }
              />
              {/*<Route
                path="direct"
                element={
                  <directTable
                    pageTitle={pageTitle.direct}
                    updateFile={handleUpdateFile}
                    updateProject={handleUpdateProject}
                    deleteProjects={handledeleteProjects}
                    columns={coldirect}
                    actions
                    feedName="direct"
                  />
                }
              />*/}
              <Route
                path="avito"
                element={
                  <AvitoTable
                    pageTitle={pageTitle.avito}
                    updateFile={handleUpdateFile}
                    updateProject={handleUpdateProject}
                    deleteProjects={handledeleteProjects}
                    columns={colAvito}
                    actions
                    feedName="avito"
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
