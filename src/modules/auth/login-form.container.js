import React from "react";
import getKeyValueOfForm from "../../utils/form/getKeyValueOfForm";
import { useDispatch, useSelector } from "react-redux";

export default function LoginFormContainer() {
  const { user } = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    user.login(getKeyValueOfForm("form"));
  };

  return (
    <div className="login-form-container">
      <form id="form">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Type password" />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
