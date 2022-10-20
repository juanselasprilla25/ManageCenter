import React, { useContext } from "react";

import { DataContext } from "Context/DataContext";
import { WriteLogs } from "Utils/WriteLogs";
import styles from "./Login.module.css";
import { useLocation } from "react-router-dom";

export const Login = () => {
	let location = useLocation();
	const { userInfo } = useContext(DataContext);

	return (
		<main>
			<h3 className={styles.main}>Login Page</h3>
			<pre>
				{JSON.stringify(userInfo, null, 2)}
			</pre>
			<WriteLogs
				userInfo={{
					name: userInfo.name,
					email: userInfo.email,
					location: location.pathname,
				}}
			/>
		</main>
	);
};
