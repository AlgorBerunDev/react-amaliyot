import React, { useState } from "react";

export default function Main({ children, visible, count }) {
  return (
    <div>
      <h1>Main</h1>
      {children}
      <h3>Visible: {JSON.stringify({ visible, count })}</h3>
    </div>
  );
}
