import React from 'react';
import './kanban-list-container.css';

export default function KanbanListContainer({children, onDrop, newColumnId}) {


  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
  
  
  const handleDrop = (e) => {
    const {id, startColumnId} = JSON.parse(e.dataTransfer.getData("text/plain"));
    onDrop(id, startColumnId, newColumnId);
  }


  return (
    <ul className='kanban-list-container' onDragOver={handleDragOver} onDrop={handleDrop}>
      {children}
    </ul>
  )
}
