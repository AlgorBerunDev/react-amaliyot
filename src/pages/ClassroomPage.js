import React from "react";
import { useSelector, useDispatch } from "react-redux";
import getFormFields from "../utils/helpers/getFormFields";

function ClassroomPage() {
  const { user } = useSelector(state => state);
  console.log(user);
  const {
    user: { addUser },
  } = useDispatch();

  const printFormFields = formId => {
    console.log(getFormFields(formId));
  };

  return (
    <>
      <form id="myForm">
        <input name="firstName" />
        <input name="lastName" />
        <input name="email" type="email" />
      </form>
      <button onClick={() => printFormFields("myForm")}>Print </button>
    </>
  );
}

export default ClassroomPage;
