import React from "react";
import styles from "./Login.module.css";
import { useLocation } from "react-router-dom";

// Utils
import { WriteLogs } from "Utils/WriteLogs";

let userInfo = {
  authStatus: "authenticated",
  name: "JuanseLasprilla",
  email: "juan.2510@hotmail.com",
  nickName: "Juanse941025",
};
export const Login = () => {
  let location = useLocation();

  return (
    <main>
      <h3 className={styles.main}>Login Page</h3>
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
