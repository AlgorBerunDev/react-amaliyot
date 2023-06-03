import React from "react";
import KanbanListItemComponent from "./kanban-list-item.component";

export default function KanbanListItemContainer() {

  const handleDragStart = (event) => {
    console.log('Handle drag start event working')
  }

  return (
    <div className="kanban-list-item-container" draggable onDragStart={handleDragStart}>
      <KanbanListItemComponent />
    </div>
  );
}
