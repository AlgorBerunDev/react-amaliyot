import React from "react";

import "./kanban-column.css";
import KanbanColumnComponent from "./kanban-column.component";

export default function KanbanColumnContainer({ onDrop, columnId, children }) {
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
    <div className="kanban-column-container" onDragOver={handleDragOver} onDrop={handleDrop}>
      <KanbanColumnComponent>{children}</KanbanColumnComponent>
    </div>
  );
}
