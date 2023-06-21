import React, { useEffect, useState } from "react";

export default function ImagePage() {
  const [file, setFile] = useState(null);
  const [src, setSrc] = useState(null);
  const [blobUrls, setBlobUrls] = useState([]);

  useEffect(() => {
    if (src) {
      setBlobUrls(c => [...c, src]);
    }
  }, [src]);

  useEffect(() => {
    console.log(blobUrls);
  }, [blobUrls]);
  return (
    <div>
      <input
        type="file"
        onChange={e => {
          window.URL.revokeObjectURL(blobUrls);
          setSrc(window.URL.createObjectURL(e.target.files[0]).toString());
          setFile(e.target.files[0]);
        }}
      />
      {src && <img src={src} width={500} alt="imag" />}
      <img src={"blob:http://localhost:3001/3de83cae-4b34-4e5f-a281-25ffaf4fb1af"} width={200} />
      <div style={{ border: "2px solid red" }}>
        {blobUrls.map(blobUrl => (
          <img src={blobUrl} alt="alt" key={blobUrl} width={300} />
        ))}
      </div>
    </div>
  );
}
