import React from "react";

import "./kanban-list.css";

export default function KanbanListContainer({ children }) {
  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Handling on drop event on kanban list container");
  };

  const handleDragOver = (event) => {
    // console.log("Handling drag over event on kanban list container")
  };

  const handleClick = (event) => {
    console.log("Handling click event");
  };

  return (
    <div
      className="kanban-list-container"
      onDrop={console.log("Hello")}
      onClick={handleClick}
      onDragOver={handleDragOver}
    >
      {children}
    </div>
  );
}
