import React from "react";
import KanbanListContainer from "./kanban-list.container";
import KanbanListItemContainer from "./kanban-list-item.container";
import KanbanColumnHeaderContainer from "./kanban-column-header.container";
import KanbanColumnContainer from "./kanban-column.container";

export default function KanbanContainer() {
  return (
    <div className="kanban-container">
      <KanbanColumnContainer>
        <KanbanColumnHeaderContainer />
        <KanbanListContainer>
          <KanbanListItemContainer />
          <KanbanListItemContainer />
        </KanbanListContainer>
      </KanbanColumnContainer>
    </div>
  );
}
