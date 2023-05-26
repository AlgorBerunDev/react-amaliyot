import React from 'react'
import KanbanColumnComponent from './kanban_column_component'
import './kanban-column.css'

export default function KanbanColumnContainer({children}) {
  return (
    <div className='kanban-column-container'>
        <KanbanColumnComponent>{children}</KanbanColumnComponent>
        </div>
  )
}
