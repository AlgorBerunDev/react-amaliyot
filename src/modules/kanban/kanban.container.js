import React, { useState } from "react";
import KanbanListContainer from "./kanban-list.container";
import KanbanListItemContainer from "./kanban-list-item.container";
import KanbanColumnHeaderContainer from "./kanban-column-header.container";
import KanbanColumnContainer from "./kanban-column.container";

import "./kanban.css";
const genColumns = (columnCount = 10, rowCount = 10) => {
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
  // console.log(result)
  return result;
};
export default function KanbanContainer() {
  const [columns, setColumns] = useState(genColumns());
  
  const handleDrop = (columnId, rowData) => {
    // console.log("Row data: ", rowData)
    // console.log("Coming column: ", columnId)

    const {rowId, oldColumnId} = rowData

    // Olinayotgan ustunni topish
    const oldColumn = columns.find(column => column.id === oldColumnId)

    // Element olinayotgan qatorni topish
    const currentRow = oldColumn.tasks.find(task => task.id === rowId)

    // Eski ustundan elementni o'chirish
    oldColumn.tasks = oldColumn.tasks.filter(task => task.id !== rowId)

    // Olingan elementni yangi ustunga qo'shish
    const currentColumn = columns.find(column => column.id === columnId)
    currentColumn.tasks.unshift(currentRow)
    
    setColumns([...columns])
  }

  return (
    <div className="kanban-container">
      <div className="kanban-component">
        {columns.map(column => {
          return (
            <KanbanColumnContainer onDrop={handleDrop} columnId={column.id} key={column.id}>
              <KanbanColumnHeaderContainer />
              <KanbanListContainer>
                {column.tasks.map(task => {
                  return <KanbanListItemContainer key={task.id} rowId={task.id} oldColumnId={column.id} />;
                })}
              </KanbanListContainer>
            </KanbanColumnContainer>
          );
        })}
      </div>
    </div>
  );
}
