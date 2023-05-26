import React, { useState } from "react";

const Item = ({ id, text }) => {
  const handleDragStart = event => {
    console.log("DragStart", id);
    event.dataTransfer.setData("text/plain", id);
  };

  return (
    <div draggable onDragStart={handleDragStart} style={{ border: "2px solid green" }}>
      {text}
    </div>
  );
};

const DropTarget = ({ onDrop, children }) => {
  const handleDragOver = event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = event => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    console.log("handleDrop", id);
    onDrop(id);
  };

  return (
    <div style={{ border: "2px solid red" }} onDragOver={handleDragOver} onDrop={handleDrop}>
      {children}
    </div>
  );
};

const DragAndDrop = () => {
  const [items, setItems] = useState([
    { id: "item1", text: "Item 1" },
    { id: "item2", text: "Item 2" },
    { id: "item3", text: "Item 3" },
  ]);

  const handleDrop = id => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <>
      {items.map(item => (
        <Item key={item.id} id={item.id} text={item.text} />
      ))}
      <DropTarget onDrop={handleDrop}>Drop here</DropTarget>
    </>
  );
};

export default DragAndDrop;
