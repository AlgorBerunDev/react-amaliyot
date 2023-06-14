import axios from "axios";
import React from "react";

export default function KanbanColumnDelete({ id, logJSONData }) {
  const deleteColumn = async () => {
    await axios.delete("http://localhost:8080/columns/" + id);
    logJSONData()
  };


  return (
    <h2 className="kanban-header__title delete" onClick={deleteColumn}>
      Delete
    </h2>
  );
}
