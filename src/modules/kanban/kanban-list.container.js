import React from "react";

import "./kanban-list.css";

export default function KanbanListContainer({ children, onDrop, columnId }) {
  const handleDragOver = event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = event => {
    event.preventDefault();
    const rowData = JSON.parse(event.dataTransfer.getData("text/plain"));
    onDrop(columnId, rowData);
  };

  return (
    <div className="kanban-list-container" onDragOver={handleDragOver} onDrop={handleDrop}>
      {children}
    </div>
  );
}
