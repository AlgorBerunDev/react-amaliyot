import React from 'react';
import './kanban-item.container.css';
import KanbanItemComponent from './kanban-item.component'

export default function KanbanItemContainer({name}) {
  return (
    <li draggable className='kanban-item-container'>
      <KanbanItemComponent name={name}/>
    </li>
  )
}
