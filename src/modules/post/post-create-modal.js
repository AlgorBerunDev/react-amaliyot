import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import getFormFields from "../../utils/helpers/getFormFields";
import http from "../../utils/http";
import UserSelect from "../user/user-select";
import { postCreateValidation } from "./post-validation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "white",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  p: 4,
};

const FORM_ID = "post-create-modal";
export default function PostCreateModal({ onSuccess }) {
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);
  const handleCreate = () => {
    const postData = getFormFields(FORM_ID);
    postData.authorId = +postData.authorId;
    postData.published = true;
    setErrors({});
    postCreateValidation(postData)
      .then(validPostData => {
        createPostRequest(validPostData);
      })
      .catch(postErrorData => {
        setErrors(postErrorData);
      });
  };

  const createPostRequest = postData => {
    http({
      url: "/post",
      method: "POST",
      data: postData,
      success: response => {
        onSuccess();
      },
      error: error => {
        if (error.response.status === 400) {
          let errorFields = {};

          error.response.data.message.forEach(message => {
            const fieldName = message.property;
            const errorMessages = [];
            for (let key in message.constraints) {
              errorMessages.push(message.constraints[key]);
            }
            Object.assign(errorFields, { [fieldName]: errorMessages.join(". ") });
          });

          setErrors(errorFields);
        }
      },
    });
  };
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={visible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style} noValidate autoComplete="off" id={FORM_ID}>
          <TextField
            fullWidth
            name="title"
            label="Title"
            variant="outlined"
            error={!!errors.title}
            helperText={!!errors.title ? errors.title : undefined}
          />
          <TextField
            fullWidth
            name="content"
            label="Content"
            variant="outlined"
            error={!!errors.content}
            helperText={!!errors.content ? errors.content : undefined}
          />
          <UserSelect error={!!errors.authorId} helperText={!!errors.authorId ? errors.authorId : undefined} />
          <div>
            <Button onClick={handleCreate}>Create</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
