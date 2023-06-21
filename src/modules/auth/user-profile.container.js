import React from "react";
import { useSelector } from "react-redux";

export default function UserProfileContainer() {
  const { user } = useSelector(state => state);

  return (
    <div>
      <div>Username: {user.current?.username}</div>
      <div>Password: {user.current?.password}</div>
      {
        user.current?.image ? (
          <div>
            <img src={user.current?.image} alt="profil picture" />
          </div>
        ) : ""
      }
    </div>
  );
}
