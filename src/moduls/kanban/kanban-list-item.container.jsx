import React from 'react'
import KanbanListItemComponent from './kanban-list-item.component'
import './kanban-list.css'

export default function KanbanListItemContainer() {
  return (
    <div className='kanban-list-item-container'>
        <KanbanListItemComponent/>
    </div>
  )
}


