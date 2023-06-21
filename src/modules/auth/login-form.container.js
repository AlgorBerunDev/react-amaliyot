import React, { useState } from "react";
import getKeyValueOfForm from "../../utils/form/getKeyValueOfForm";
import { useDispatch } from "react-redux";

export default function LoginFormContainer() {
  const [file, setFile] = useState({})
  const { user } = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    user.login(Object.assign(getKeyValueOfForm("form"), {image : file}));
  };

  const handleFileSelect = (e) => {
    const image = URL.createObjectURL(e.target.files[0])
    setFile(image)
  }

  return (
    <div className="login-form-container">
      <form id="form">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Type password" />
        <input type="file" onChange={handleFileSelect}/>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
