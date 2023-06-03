import React from "react";

import "./kanban-column.css";
import KanbanColumnComponent from "./kanban-column.component";

export default function KanbanColumnContainer({ children, onDrop, columnId }) {

  const handleDrop = event => {
    event.preventDefault()
    const rowData = JSON.parse(event.dataTransfer.getData("text/plain"))
    onDrop(columnId, rowData)
    console.log("lskdjflskdjf")
  }

  const handleDragOver = event => {
    event.preventDefault()
  }
  
  return (
    <div className="kanban-column-container" onDragOver={handleDragOver} onDrop={handleDrop}>
      <KanbanColumnComponent>{children}</KanbanColumnComponent>
    </div>
  );
}
