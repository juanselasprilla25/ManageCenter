import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul className="navLinks">
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>
  );
}
