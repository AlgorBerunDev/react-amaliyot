import React from "react";
import "./kanban.css";

export default function KanbanContainer({ children }) {
  return <div className="kanban-container">
    <div className="kanban-main-header">
      <h1>Task list</h1>
      <p>Profile</p>
    </div>
    {children}
  </div>;
}
