import { useState, useEffect } from "react";

export const WriteLogs = ({ userInfo }) => {
  const [locationHistory, setLocationHistory] = useState([]);
  const { name, email, location } = userInfo;

  useEffect(() => {
    setLocationHistory((prevLocation) => [...prevLocation, "location"]);
  }, []);
  {
    console.log({ name }, { email }, locationHistory);
  }
};
