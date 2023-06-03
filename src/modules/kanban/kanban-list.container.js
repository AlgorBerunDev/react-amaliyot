import React from "react";

import "./kanban-list.css";

export default function KanbanListContainer({ children }) {

  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   // console.log("On drop");
  //   const rowData = JSON.parse(event.dataTransfer.getData("text/plain"))
  //   onDrop(columnId, rowData)
  // };
  
  const handleDragOver = (event) => {
    event.preventDefault();
    // console.log("Drag over")
  };

  return (
    <div
      className="kanban-list-container"
      // onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {children}
    </div>
  );
}
