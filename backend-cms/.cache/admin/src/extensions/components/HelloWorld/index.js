// @ts-nocheck
import React from "react";

const HelloWorldButton = () => {
  return (
    <button
      style={{backgroundColor: "gray", padding: "10px 20px", color: "white"}}
      onClick={() => alert("Hello World")}
    >
      Hello World
    </button>
  );
};

export default HelloWorldButton;
