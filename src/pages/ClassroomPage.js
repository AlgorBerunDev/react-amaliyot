import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
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
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        id="myForm"
      >
        <TextField name="outlined" label="Outlined" variant="outlined" />
        <TextField name="filled" label="Filled" variant="filled" />
        <TextField name="standard" label="Standard" variant="standard" />
      </Box>
      <button onClick={() => printFormFields("myForm")}>Print </button>
    </>
  );
}

export default ClassroomPage;
