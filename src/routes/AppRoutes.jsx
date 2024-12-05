import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import NeedLoginPage from "../pages/NeedLoginPage";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import RedirectPage from "../pages/RedirectPage";
import MainWrapper from "../layouts/MainWrapper";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainWrapper />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/need-login" element={<NeedLoginPage />} />
      </Route>
      <Route path="/redirect" element={<RedirectPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
