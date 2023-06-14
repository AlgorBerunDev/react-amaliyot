import axios from "axios";

class ManagerTasks {
  async findTask(colId, taskId, reRender) {
    let data = await axios.get("http://localhost:8080/columns/" + colId)
    data.data.tasks = data.data.tasks.filter((task) => task.id !== taskId);

    axios.put("http://localhost:8080/columns/" + colId, {
        id: data.data.id,
        title: data.data.title,
        tasks: [...data.data.tasks]
    })

    reRender()
  }

  async ReverseColumn(oldColId, taskId, newColId, reRender) {
    let data = await axios.get("http://localhost:8080/columns/" + oldColId)
    data.data.tasks = data.data.tasks.filter((task) => task.id === taskId);

    let newCol = await axios.get("http://localhost:8080/columns/" + newColId)

    axios.put("http://localhost:8080/columns/" + newColId, {
        id: newCol.data.id,
        title: newCol.data.title,
        tasks: [...newCol.data.tasks, ...data.data.tasks]
    })

    reRender()
  }
}


export default new ManagerTasks();