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
import DirectTable from "../DirectTable/DirectTable";
import AvitoTable from "../AvitoTable/AvitoTable";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import LoginPage from "../LoginPage/LoginPage";

function App() {
  const [user, setUser] = useState(true);

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
          {user && <Header />}
          <main className={user ? "main" : "login__wrapper"}>
            <Routes>
              <Route element={<ProtectedRoute isAlowed={!!user} />}>
                <Route
                  index
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
                <Route
                  path="direct"
                  element={
                    <DirectTable
                      pageTitle={pageTitle.direct}
                      updateFile={handleUpdateFile}
                      updateProject={handleUpdateProject}
                      deleteProjects={handledeleteProjects}
                      columns={colCian}
                      actions
                      feedName="direct"
                    />
                  }
                />
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
              </Route>
              <Route path="*" element={<p>404 не найдено</p>} />
              <Route path="login" element={<LoginPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
