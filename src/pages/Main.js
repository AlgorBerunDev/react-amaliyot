import React from "react";
import LoginForm from "../modules/forms/LoginForm";

export default function Main({ children, visible, count }) {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
