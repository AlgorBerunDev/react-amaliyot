import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginFormContainer() {
  const { posts } = useDispatch()
  // const { posts } = useSelector(state => state);


  const [file, setFile] = useState('')
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    posts.add({ title, file });
  };

  const handleFileSelect = (e) => {
    const image = URL.createObjectURL(e.target.files[0])
    setFile(image)
  }

  const handleChangeTitle = (e) => {
    const title = e.target.value
    setTitle(title)
  }

  return (
    <div className="login-form-container">
      <form id="form">
        <input onChange={handleChangeTitle} type="text" placeholder="Username" />
        <input type="file" onChange={handleFileSelect} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
