import { Navigate, Route, Routes } from "react-router-dom";

import ErrorPage from "Utils/NotFoundPage";
import { Login } from "Pages/Login/Login";
import React from "react";
import { SignUpForm } from "Pages/SignUpForm/SignUpForm";

export const PublicRoutes = () => {
	return (
		<Routes>
			<Route path="/login" render={() => <Login />} />
			<Route path="/signUp" render={() => <SignUpForm />} />
			<Route path="*" element={<Navigate to="/login" replace />} />
		</Routes>
	);
};
