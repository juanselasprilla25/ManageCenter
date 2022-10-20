import "./SignUpForm.module.css";

import React, { useContext, useEffect, useMemo, useState } from "react";

import { DataContext } from "Context/DataContext";
import { WriteLogs } from "Utils/WriteLogs";
import { useLocation } from "react-router-dom";

export const SignUpForm = () => {
	let location = useLocation();
	const { userInfo } = useContext(DataContext)

	const [age, setAge] = useState(0);
	const [name, setName] = useState("");
	const [darkMode, setDarkMone] = useState(false);

	const modeStyles = darkMode
		? { background: "#333", color: "#FFF" }
		: { background: "#FFF", color: "#000" };

	const person = useMemo(() => {
		return { age, name };
	}, [age, name]);

	// useEffect(() => {
	// 	console.log(person);
	// }, [person]);

	return (
		<React.Fragment>
			<form style={modeStyles}>
				Age:
				<input
					type="number"
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>
				<br />
				Name :
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				Dark Mode:
				<input
					type="checkbox"
					value={darkMode}
					onChange={(e) => setDarkMone(e.target.checked)}
				/>
			</form>
			<WriteLogs
				userInfo={{
					name: userInfo.name,
					email: userInfo.email,
					location: location.pathname,
				}}
			/>
		</React.Fragment>
	);
};
