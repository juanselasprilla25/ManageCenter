import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";

import { Login } from "Pages/Login/Login";
import { Navbar } from "Components/Navbar/Navbar";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import React from "react";

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
