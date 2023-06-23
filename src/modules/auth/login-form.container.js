import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginFormContainer() {
  const { posts } = useDispatch()
  // const { posts } = useSelector(state => state);


  const [file, setFile] = useState('')
  const [title, setTitle] = useState('')


  const postTitle = useRef()
  const imgUrl = useRef()

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   posts.add({ title, file });
  // };

  const handleSubmit = e => {
    e.preventDefault();
    posts.add({ title: postTitle.current.value, imgUrl: imgUrl.current.value });
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
    <div className="login-form-container px-5 py-4">
      <form id="form" className="col-6 d-flex">
        {/* <input onChange={handleChangeTitle} type="text" placeholder="Username" />
        <input type="file" onChange={handleFileSelect} /> */}

        <input className="form-control me-3" ref={postTitle} type="text" placeholder="post title" />
        <input className="form-control me-3" ref={imgUrl} type="text" placeholder="Img url" />

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
