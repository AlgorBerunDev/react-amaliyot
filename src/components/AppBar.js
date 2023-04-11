import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function AppBar() {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    history.push("signin");
  };
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
      <li>
        <button onClick={() => handleLogout()}>Logout</button>
      </li>
    </ul>
  );
}
