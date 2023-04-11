import React from "react";
import getFormFields from "../utils/helpers/getFormFields";
import http from "../utils/http";

const FORM_ID = "login-form";

export default function Signin() {
  const handleSubmit = e => {
    e.preventDefault();
    const { username, password } = getFormFields(FORM_ID);
    http({
      url: "/auth/login",
      method: "POST",
      data: { username, password },
      success: function (response) {
        localStorage.setItem("access_token", response.data.access_token);
      },
    });
  };

  return (
    <div>
      <form id={FORM_ID}>
        <input type="text" name="username" id="username" placeholder="username" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}
