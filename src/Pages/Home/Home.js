import React, { useContext } from "react";

import { DataContext } from "Context/DataContext";
import { Header } from "./Header";
import { WriteLogs } from "Utils/WriteLogs";
import styles from "./Home.module.css";
import { useLocation } from "react-router-dom";

export const Home = () => {
	let location = useLocation();
	const { userInfo } = useContext(DataContext);

	return (
		<React.Fragment>
			<Header />
			<main>
				<h3 className={styles.main}>Home Page</h3>
				<WriteLogs
					userInfo={{
						name: userInfo.name,
						email: userInfo.email,
						location: location.pathname,
					}}
				/>
			</main>
		</React.Fragment>
	);
};
