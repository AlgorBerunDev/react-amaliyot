import React from "react";
import { useSelector } from "react-redux";

export default function UserProfileContainer() {
  const { posts } = useSelector(state => state);

  return (
    <div>
      <div style={{display: 'flex', gap: '20px', padding: '20px'}}>
        {
          posts.current ? (
            posts.current.map((e, i) => {
              return <div key={i}>
                <img src={e.file} alt="profil picture" width={200} height={200} />
                <p>{e.title}</p>
              </div>
            })
          ) : ""
        }
      </div>

    </div>
  );
}
