import React, { useEffect, useState } from "react";

export default function Image({ errorSrc, children, ...props }) {
  const [blobUrl, setBlobUrl] = useState(null);
  const [isDownloadError, setIsDownloadError] = useState(false);

  useEffect(() => {
    if (props.src) {
      fetch(props.src)
        .then(async response => {
          const imageBlob = await response.blob();
          if (blobUrl) {
            window.URL.revokeObjectURL(blobUrl);
          }
          setBlobUrl(window.URL.createObjectURL(imageBlob));
        })
        .catch(() => {
          setIsDownloadError(true);
        });
    }

    return () => {
      if (blobUrl) {
        window.URL.revokeObjectURL(blobUrl);
      }
    };
  }, [props.src]);

  if (isDownloadError) return <img src={errorSrc} width={200} alt="sdfsdf" />;
  if (!blobUrl) return <div>Loading....</div>;

  return <img {...props} src={blobUrl} alt={props.alt} />;
}
