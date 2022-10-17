import React from "react";
import styles from "./Home.module.css";
import { useLocation } from "react-router-dom";

// Utils
import { WriteLogs } from "Utils/WriteLogs";

let userInfo = {
  authStatus: "authenticated",
  name: "JuanseLasprilla",
  email: "juan.2510@hotmail.com",
  nickName: "Juanse941025",
};

export const Home = () => {
  let location = useLocation();

  return (
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
  );
};
