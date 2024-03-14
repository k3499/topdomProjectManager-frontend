import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { updateFile, updateProject, deleteProjects } from "../../utils/api";
import { Alert, Space, message } from "antd";
import {
  colDashboard,
  colCian,
  colDirect,
  colAvito,
  colDomclick,
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
  const [password, setPassword] = useState(null);

  useEffect(() => {
    handleCheckAuth();
    console.log(user);
  }, []);

  const handleUpdateProject = (project) => {
    if (password === "1234") {
      message.error("вы не можете изменять проект на тестовом аккаунте", 3);
      return;
    } else {
      updateProject(project);
    }
  };
  const handledeleteProjects = (project) => {
    if (password === "1234") {
      message.error("вы не можете удалять проект на тестовом аккаунте", 3);
      return;
    }
    deleteProjects(project);
  };

  const handleUpdateFile = (project) => {
    if (password === "1234") {
      message.error("вы не можете загружать фото на тестовом аккаунте", 3);
      return;
    }
    updateFile(project);
  };

  const login = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
  };
  const handleCheckAuth = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(true);
      setPassword(user.password);
    }
  };

  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          {user && <Header />}
          <main className={user ? "main" : "login__wrapper"}>
            {password === "1234" && (
              <Space direction="vertical" style={{ width: "100%" }}>
                <Alert
                  message="Вы вошли в тестовый аккаунт. Добавление, удаление или изменение проектов не доступно"
                  banner
                  closable
                  className="alert"
                />
              </Space>
            )}

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
                      columns={colDomclick}
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
