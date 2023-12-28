import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  updateFile,
  updateProject,
  getProjects,
  deleteProjects,
} from "../../utils/api";
import { colDashboard, columns, pageTitle } from "../../utils/constants";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import Header from "../Header/Header";
import FeedTable from "../FeedTable/FeedTable";

function App() {
  const [addProjectVisible, setAddProjectVisible] = useState(false);

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
                    rows={projects}
                    actions
                  />
                }
              />
              <Route
                path='cian'
                element={
                  <FeedTable
                    pageTitle={pageTitle.cian}
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
                    pageTitle={pageTitle.direct}
                    updateFile={handleUpdateFile}
                    updateProject={handleUpdateProject}
                    deleteProjects={handleUdeleteProjects}
                    columns={columns}
                    rows={projects}
                    actions
                    direct
                  />
                }
              />
              <Route
                path='avito'
                element={
                  <FeedTable
                    pageTitle={pageTitle.avito}
                    updateFile={handleUpdateFile}
                    updateProject={handleUpdateProject}
                    deleteProjects={handleUdeleteProjects}
                    columns={columns}
                    rows={projects}
                    actions
                    avito
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
