import React from "react";
import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/establishments">Establishment page</Link>
      </li>
      <li>
        <Link to="/classrooms">Classroom page</Link>
      </li>
      <li>
        <Link to="/signin">Sign in</Link>
      </li>
      <li>
        <Link to="/signup">Sign up</Link>
      </li>
    </ul>
  );
}
