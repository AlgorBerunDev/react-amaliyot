import React, { useState } from "react";

const Item = ({ id, text }) => {
  const handleDragStar = (event) => {
    event.dataTransfer.setData("text/plain", id);
    console.log(id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStar}
      style={{ border: "1px solid black" }}
    >
      {text}
    </div>
  );
};

const DropTarget = ({ onDrop, children }) => {
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    console.log(id, "h-drop");
    onDrop(id);
  };

  return (
    <div
      style={{ border: "3px solid green" }}
      onDragOver={handleDragOver}
      onDrag={handleDrop}
    >
      {children}
    </div>
  );
};

export default function Test() {
  const [item, setItem] = useState([
    { id: "item1", text: "text_1" },
    { id: "item2", text: "text_2" },
    { id: "item3", text: "text_3" },
  ]);

  const [item2, setItem2] = useState([{ id: "item4", text: "Item 4" }]);

  const handleDrop = (id) => {
    setItem2((current_item) => {
      return [...current_item, item.find((item) => item.id === id)];
    });

    const a = item.filter((itemm) => itemm.id !== id);
    setItem(a);
  };

  
  return (
    <div>
      {item.map((item) => {
        return <Item key={item.id} id={item.id} text={item.text} />;
      })}
      <DropTarget onDrop={handleDrop}>
        <div>Handle Drop</div>
        {item2.map((item) => {
          return <div key={item.id}>{item.text}</div>;
        })}
      </DropTarget>
    </div>
  );
}
