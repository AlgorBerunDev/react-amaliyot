import React from "react";
import "./kanban-item.container.css";
import KanbanItemComponent from "./kanban-item.component";
import axios from "axios";

export default function KanbanItemContainer({ id, name, oldColumnId}) {

  const handleGragStart = (e) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({id,  startColumnId : oldColumnId, endColumnId : null}));
  };

  
  return (
    <li draggable onDragStart={handleGragStart} className="kanban-item-container"  key={id} >
      <KanbanItemComponent name={name} id={id}/>
    </li>
  );
}
