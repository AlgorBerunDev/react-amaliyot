import React from 'react'
import './kanban-column.css'

export default function KanbanColumnComponent({children}) {
  return (
    <div className='kanban_column_component'>
        {children}
    </div>
  )
}
