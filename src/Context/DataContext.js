import React, { createContext } from 'react'

export const DataContext = createContext();

let userInfo = {
	authStatus: "authenticated",
	name: "JuanseLasprilla",
	email: "juan.2510@hotmail.com",
	nickName: "Juanse941025",
	isLogActivated: true,
};

let userInfo2 = {
	authStatus: "authenticated",
	name: "JuanseLasprilla",
	email: "juan.2510@hotmail.com",
	nickName: "Juanse941025",
	isLogActivated: false,
};

export const DataProvider = ({ children }) => {
	return (
		<DataContext.Provider value={{ userInfo, userInfo2 }}>
			{children}
		</DataContext.Provider>
	)
}
