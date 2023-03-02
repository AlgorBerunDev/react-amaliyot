import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ClassroomPage() {
  const { user } = useSelector(state => state);
  console.log(user);
  const {
    user: { addUser },
  } = useDispatch();

  return (
    <>
      <ul>
        {user.collection.map(collectionItem => {
          return (
            <li key={collectionItem.id}>
              <pre>{JSON.stringify(collectionItem, null, 2)}</pre>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() =>
          addUser({
            email: "test@test.com",
            firstName: "test",
            lastName: "test-last",
          })
        }
      >
        Create User
      </button>
    </>
  );
}

export default ClassroomPage;
