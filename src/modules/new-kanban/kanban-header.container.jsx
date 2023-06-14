import React from 'react';
import './kanban-header.container.css';


export default function KanbanHeaderContainer({title, children}) {
	return (
		<div className='kanban-header'>
			<h2 className='kanban-header__title'>{title}</h2>
			{children}
		</div>
	);
}
