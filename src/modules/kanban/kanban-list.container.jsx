import React from 'react';
import './kanban-list-container.css';

export default function KanbanListContainer({children}) {
  return (
    <ul className='kanban-list-container'>
      {children}
    </ul>
  )
}
