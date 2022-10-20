import { Navigate, Route, Routes } from "react-router-dom";

import { Dashboard } from "Pages/Dashboard/Dashboard";
import { Home } from "Pages/Home/Home";
import { Login } from "Pages/Login/Login";
import { PersonalInfo } from "Pages/PersonalInfo/PersonalInfo";
import React from "react";
import { SignUpForm } from "Pages/SignUpForm/SignUpForm";

export const PrivateRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signUp" element={<SignUpForm />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/personalInfo" element={<PersonalInfo />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};
