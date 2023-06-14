import React, { useRef } from "react";
import "./add-column.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function AddColumnContainer({ logJSONData }) {
  // {
  //   id: 1,
  //   title: "column 1",
  //   tasks: [
  //     { id: 1, title: "item 1-1", parentId: 1 },
  //     { id: 2, title: "item 1-2", parentId: 1 },
  //   ],
  // }

  const colTitle = useRef();

  async function postJSON(e) {
    e.preventDefault();
    const data = await axios.post("http://localhost:8080/columns", {
      id: uuidv4(),
      title: colTitle.current.value,
      tasks: [],
    })
    colTitle.current.value = ''
    logJSONData();
  }

  return (
    <form className="form__group field" onSubmit={postJSON}>
      <input
          type="input"
          ref={colTitle}
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
        />
      <label htmlFor="name" className="form__label">
        Title
      </label>
      <button>Add</button>
    </form>
  );
}
