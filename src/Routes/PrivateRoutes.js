import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//Components
import { Dashboard } from "Pages/Dashboard/Dashboard";
import { Home } from "Pages/Home/Home";
import { Login } from "Pages/Login/Login";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
