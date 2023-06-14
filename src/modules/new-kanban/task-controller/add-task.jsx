import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function AddTaskContainer({ colId, logJSONData2 }) {
  const [cols, setCols] = useState({});

  async function logJSONData() {
    const res = await axios.get("http://localhost:8080/columns/" + colId);
    setCols(res.data);
  }
  useEffect(() => {
    logJSONData()
  }, [])
  

  async function changeTasks(text) {
    await axios.put("http://localhost:8080/columns/" + cols.id, {
        id: cols.id,
        title: cols.title,
        tasks: [...cols.tasks, { id: uuidv4(), title: text, parentId: cols.id }]
    });

    logJSONData2()
  }


  const addOneTask = () => {
    logJSONData();
    const text = prompt("Enter your task");
    if (text) {
      changeTasks(text)
    } 
  };

  return (
    <li className="empyt-list" onClick={addOneTask}>
      Click or Drop
    </li>
  );
}
