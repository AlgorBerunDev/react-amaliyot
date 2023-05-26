import React, { useState } from "react";
import KanbanColumnContainer from "./kanban-column.container";
import KanbanColumnHeaderContainer from "./kanban-column-header.container";
import KanbanListContainer from "./kanban-list.container";
import KanbanListItemContainer from "./kanban-list-item.container";
import "./kanban.css";

const getColumns = (columnCount = 10, rowCount = 5) => {
  const result = [];
  for (let i = 0; i < columnCount; i++) {
    result.push({
      id: i,
      title: `Column ${i + 1} title`,
      tasks: [],
    });
    for (let j = 0; j < rowCount; j++) {
      result[i].tasks.push({
        id: `${i}-${j}`,
        fullName: `Full Name ${i}-${j}`,
      });
    }
  }
 
  return result;
};

export default function KanbanContainer() {
  const [columns, setColumns] = useState(getColumns());
  return (
    <div className="kanban_container">
      <div className="kanban-component">
        {columns.map((column) => {
          return (
            <KanbanColumnContainer>
              <KanbanColumnHeaderContainer />
              <KanbanListContainer>
                {column.tasks.map((tasks) => {
                  return <KanbanListItemContainer key={tasks.id} />;
                })}
              </KanbanListContainer>
            </KanbanColumnContainer>
          );
        })}
      </div>
    </div>
  );
}
