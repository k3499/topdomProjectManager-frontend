import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { updateFile, updateProject, deleteProjects } from "../../utils/api";
import {
  colDashboard,
  colCian,
  colDirect,
  colAvito,
  pageTitle,
} from "../../utils/constants";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import Header from "../Header/Header";
import CianTable from "../CianTable/CianTable";
import DirectTable from "../DirectTable/DirectTable";
import AvitoTable from "../AvitoTable/AvitoTable";
import DomclickTable from "../DomclickTable/DomclickTable";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import LoginPage from "../LoginPage/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    handleCheckAuth();
    console.log(user);
  }, []);

  const handleUpdateProject = (project) => {
    updateProject(project);
  };
  const handledeleteProjects = (project) => {
    deleteProjects(project);
  };

  const handleUpdateFile = (project) => {
    updateFile(project);
  };

  const login = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
  };
  const handleCheckAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(true);
    }
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
                      columns={colDirect}
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
                      feedName="avito"
                    />
                  }
                />
                <Route
                  path="domclick"
                  element={
                    <DomclickTable
                      pageTitle={pageTitle.domclick}
                      updateFile={handleUpdateFile}
                      updateProject={handleUpdateProject}
                      deleteProjects={handledeleteProjects}
                      columns={colAvito}
                      feedName="domclick"
                    />
                  }
                />
              </Route>
              <Route path="*" element={<p>404 не найдено</p>} />
              <Route
                path="login"
                element={
                  <LoginPage login={login} user={user} setUser={setUser} />
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
