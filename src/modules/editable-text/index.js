import React, { useContext, useEffect, useState } from "react";

// export function EditableContent({ contentId, children }) {
//   const [content, setContent] = useState(children);

//   function handleContentChange(event) {
//     console.log(event);
//     // setContent(event.target.innerHTML);
//   }

//   return (
//     <span contentEditable onInput={handleContentChange}>
//       {content}
//     </span>
//   );
// }

const EditableTextContext = React.createContext();

export function EditableTextProvider({ children }) {
  const [contents, setContents] = useState([]);

  return <EditableTextContext.Provider value={{ contents, setContents }}>{children}</EditableTextContext.Provider>;
}

export function EditableText({ textId, groupName, children }) {
  const { contents } = useContext(EditableTextContext);

  useEffect(() => {
    const saveTimeout = setTimeout(saveContent, 1000);

    return () => {
      clearTimeout(saveTimeout);
    };
  });

  return <span>{children}</span>;
}
