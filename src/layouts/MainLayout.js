import React from "react";
import AppBar from "../components/AppBar";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <div className="left-sidebar"></div>
      <div className="main-container">
        <div className="app-bar">
          <AppBar />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
