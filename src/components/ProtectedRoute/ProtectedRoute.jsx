import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAlowed, redirectPath = "/login", children }) => {
  if (!isAlowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
