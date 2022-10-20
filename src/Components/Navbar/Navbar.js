import "./Navbar.css";

import { Link } from "react-router-dom";
import React from "react";

export function Navbar() {
	return (
		<nav>
			<ul className="navLinks">
				<Link to="/home">Home</Link>
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/login">Login</Link>
				<Link to="/signUp">Sign Up</Link>
				<Link to="/personalInfo">Personal Info</Link>
			</ul>
		</nav>
	);
}
