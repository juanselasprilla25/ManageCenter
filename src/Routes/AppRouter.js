import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//Components
import { Login } from "Pages/Login/Login";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { Navbar } from "Components/Navbar/Navbar";

let userInfo = {
  authStatus: "authenticated",
  name: "JuanseLasprilla",
  email: "juan.2510@hotmail.com",
  nickName: "Juanse941025",
};

export const AppRouter = () => {
  if (userInfo.authStatus === "checking")
    return <div className="loading">Checking credentials...</div>;
  return (
    <Router>
      <Navbar />
      <Routes>
        {userInfo.authStatus === "authenticated" ? (
          <Route path="/*" element={<PrivateRoutes />} />
        ) : (
          <Route path="/*" element={<PublicRoutes />} />
        )}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};
