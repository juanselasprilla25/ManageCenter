import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//Components
import { Login } from "Pages/Login/Login";

//Utils
import ErrorPage from "Utils/NotFoundPage";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" render={() => <Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
