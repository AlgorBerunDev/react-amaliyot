import React from 'react'
import './kanban-column.css'
import iconNotebook from '../../images/icon-notebook.png'

export default function KanbanColumnHeaderContainer({header='To do'}) {
  return (
    <div className='kanban-column-header-container'>
        <div className="kanban-column-header-container_icon">
           <img src={iconNotebook} alt="icon notebook" />
        </div>
        <div className="kanban-column-header-container_title">
            {header}
        </div>
    </div>
  )
}
