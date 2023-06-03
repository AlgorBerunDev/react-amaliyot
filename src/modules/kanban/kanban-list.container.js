import React from "react";

import "./kanban-list.css";

export default function KanbanListContainer({ children }) {

  const handleDrop = (event) => {
    event.preventDefault();
    console.log("Handling on drop event on kanban list container");
  };

  const handleDragOver = (event) => {
    console.log("Handling drag over event on kanban list container")
  };

  return (
    <div
      className="kanban-list-container"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {children}
    </div>
  );
}
