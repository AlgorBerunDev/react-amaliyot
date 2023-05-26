import React from 'react';
import './kanban-item.component.css'

import avatar from '../../assets/images/avatar-female.png';

export default function KanbanItemComponent({name}) {
	return (
		<div className='kanban-item-component'>
			<h4 className='kanban-item-component-name'>{name}</h4>
			<div className='kanban-item-component-info'>
				<img src={avatar} width={20} alt='avatar' className='kanban-item-component-ava' />
				<p className='kanban-item-component-label'>Webflow</p>
				<p className='kanban-item-component-label'>Webflow</p>
			</div>
		</div>
	);
}
