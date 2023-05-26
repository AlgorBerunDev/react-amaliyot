import React from 'react';
import { useState } from 'react';
import KanbanColumnContainer from './kanban-column.container';
import KanbanHeaderContainer from './kanban-header.container';
import KanbanItemContainer from './kanban-item.container';
import KanbanListContainer from './kanban-list.container';
import KanbanContainer from './kanban.container';

const genColumns = (columnCount = 3, rowCount = 3) => {
	const result = [];
	for (let i = 0; i < columnCount; i++) {
		result.push({
			id: i,
			title: `Column ${i + 1} title`,
			tasks: [],
		});
		for (let j = 0; j < rowCount; j++) {
			result[i].tasks.push({
				id: `${i}-${j}`,
				fullName: `Full Name ${i}-${j}`,
			});
		}
	}
	return result;
};

export default function Kanban() {
	const [columns, setColumns] = useState(genColumns());
	return (
		<KanbanContainer>
			{columns.map((col) => {
				return (
					<KanbanColumnContainer key={col.id}>
						<KanbanHeaderContainer />
						<KanbanListContainer>
							{col.tasks.map((task) => {
								return <KanbanItemContainer key={task.id} name={col.title} />;
							})}
						</KanbanListContainer>
					</KanbanColumnContainer>
				);
			})}
		</KanbanContainer>
	);
}
