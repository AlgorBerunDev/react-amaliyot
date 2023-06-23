import React, { useRef } from "react";
import { useDispatch } from "react-redux";

export default function LoginFormContainer() {
  const { posts } = useDispatch()


  const postTitle = useRef()
  const imgUrl = useRef()

  const handleSubmit = e => {
    e.preventDefault();
    posts.add({ title: postTitle.current.value, imgUrl: imgUrl.current.value });
  };

  return (
    <div className="login-form-container px-5 py-4">
      <form id="form" className="col-6 d-flex">
        <input className="form-control me-3" ref={postTitle} type="text" placeholder="post title" />
        <input className="form-control me-3" ref={imgUrl} type="text" placeholder="Img url" />

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
