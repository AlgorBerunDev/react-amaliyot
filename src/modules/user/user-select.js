import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import http from "../../utils/http";

export default function UserSelect({ error, helperText }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    http({
      url: "/users",
      success: response => {
        setUsers(response.data);
        setUsers(state => [...state, { id: -1, username: "Faker" }]);
      },
    });
  }, []);

  return (
    <TextField
      select
      label="Author"
      SelectProps={{
        native: true,
      }}
      error={error}
      helperText={helperText}
      defaultValue={users[0]?.id}
      name="authorId"
      type="number"
    >
      {users.map(option => (
        <option key={option.id} value={option.id}>
          {option.username}
        </option>
      ))}
    </TextField>
  );
}
