import React from 'react'
import './kanban-list.css'
import imgMale from '../../images/Male.jpg'

export default function KanbanListItemComponent() {
  return (
    <div className='kanban-list-item-component'>
      <div className="kanban-list-item-component_header">
        <div className="kanban-list-item-component_header_title">
        Christmas Banners
        </div>
      </div>
      <div className="kanban-list-item-component_actions">
        <div className="kanban-list-item-component_avatar">
          <img src={imgMale} alt="avatar img" />
        </div>
        <div className="kanban-list-item-component_labels">
          <div className="kanban-list-item-component_label">Label</div>
          <div className="kanban-list-item-component_label">Label</div>
          <div className="kanban-list-item-component_label">Label</div>
        </div>
      </div>
    </div>
  )
}
