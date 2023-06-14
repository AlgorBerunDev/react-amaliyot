import React, { useEffect, useState } from "react";
import KanbanColumnContainer from "./kanban-column.container";
import KanbanHeaderContainer from "./kanban-header.container";
import KanbanItemContainer from "./kanban-item.container";
import KanbanListContainer from "./kanban-list.container";
import KanbanContainer from "./kanban.container";
import AddColumnContainer from "./task-controller/add-column.container";
import AddTaskContainer from "./task-controller/add-task";
import ManagerTasks from "./task-controller/ManagerTasks";
import axios from "axios";
import KanbanColumnDelete from "./kanban-columndelete";

export default function Kanban() {
  const [columns, setColumns] = useState([]);
  async function logJSONData() {
    const data = await axios("http://localhost:8080/columns");
    setColumns(data.data);
  }

  useEffect(() => {
    logJSONData();
  }, []);

  const handleDrop = (id, startColumnId, newColumnId) => {
    if (startColumnId !== newColumnId) {
      ManagerTasks.ReverseColumn(startColumnId, id, newColumnId, reRender);
      ManagerTasks.findTask(startColumnId, id, reRender);
      setColumns([...columns]);
    }
  };

  function reRender() {
    logJSONData();
  }

  return (
    <KanbanContainer>
      {columns.map((col) => {
        return (
          <KanbanColumnContainer key={col.id}>
            <KanbanHeaderContainer title={col.title} id={col.id}>
              <KanbanColumnDelete id={col.id} logJSONData={logJSONData} />
            </KanbanHeaderContainer>
            <KanbanListContainer onDrop={handleDrop} newColumnId={col.id}>
              {col.tasks.length ? (
                col.tasks.map((task) => {
                  return (
                    <KanbanItemContainer
                      key={task.id}
                      name={task.title}
                      id={task.id}
                      oldColumnId={col.id}
                    />
                  );
                })
              ) : (
                <AddTaskContainer colId={col.id} logJSONData2={logJSONData} />
              )}
              {col.tasks.length > 0 ? (
                <AddTaskContainer colId={col.id} logJSONData2={logJSONData} />
              ) : (
                ""
              )}
            </KanbanListContainer>
          </KanbanColumnContainer>
        );
      })}
      <div className="add-task-list">
        <AddColumnContainer logJSONData={logJSONData} />
      </div>
    </KanbanContainer>
  );
}
