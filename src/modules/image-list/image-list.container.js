import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ImageListContainer() {
  const [url, setUrl] = useState(null);

  const inputRef = useRef(null);

  const {
    image: { collection },
  } = useSelector(state => state);

  const { image } = useDispatch();

  useEffect(() => {
    console.log("Image collection changed");
  }, [collection]);

  const handleChangeFile = e => {
    setUrl(window.URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div>
        <input type="text" ref={inputRef} />
        <input type="file" onChange={handleChangeFile} />
        <button onClick={() => image.setImageReducer({ title: inputRef.current.value, url })}>Add</button>
      </div>

      <h4>Images</h4>
      {collection.map(({ title, url }, index) => (
        <div key={index}>
          <span>{title}</span>
          <img src={url} alt="images" height={50} />
        </div>
      ))}
    </div>
  );
}
