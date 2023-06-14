import React from "react";
import KanbanListItemComponent from "./kanban-list-item.component";

export default function KanbanListItemContainer({ rowId, oldColumnId }) {
  const handleDragStart = event => {
    event.dataTransfer.setData("text/plain", JSON.stringify({ rowId, oldColumnId }));
  };

  return (
    <div className="kanban-list-item-container" draggable onDragStart={handleDragStart}>
      <KanbanListItemComponent rowId={rowId} />
    </div>
  );
}
