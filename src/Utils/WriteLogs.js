import { useEffect, useState } from "react";

export const WriteLogs = ({ userInfo }) => {

	const [locationHistory, setLocationHistory] = useState(
		JSON.parse(localStorage.getItem("s_locationHistory")) ?? []
	);
	const { name, email, location } = userInfo;

	useEffect(() => {
		setLocationHistory((prevLocation) => [...prevLocation, location]);
	}, []);


	localStorage.setItem("s_locationHistory", JSON.stringify(locationHistory));
	console.log('User Logs: ', { name }, { email }, locationHistory);
};


