import React, { useContext } from "react";

import { DataContext } from "Context/DataContext";
import { WriteLogs } from "Utils/WriteLogs";
import styles from "./Dashboard.module.css";
import { useLocation } from "react-router-dom";

export const Dashboard = () => {

	let location = useLocation();
	const { userInfo } = useContext(DataContext);
	const { userInfo2 } = useContext(DataContext)

	return (
		<main>
			<h3 className={styles.main}>Dashboard Page</h3>
			{/* {
				console.log('This is userInfo2', userInfo2.isLogActivated)

			} */}
			{userInfo2.isLogActivated ?
				<WriteLogs
					userInfo={{
						name: userInfo.name,
						email: userInfo.email,
						location: location.pathname,
					}}
				/> : console.log('The user has no LOGS SETUP')
			}
		</main>
	);
};