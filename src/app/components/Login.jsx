"use client"
import React, { useState, useEffect } from "react";

const Login = () => {
  const [firstname, setFirstname] = useState("");
  const [secondName, setSecondName] = useState("");
  const [renderCount, setRenderCount] = useState(0); // Initialize render count state

  const name = firstname + " " + secondName;

  useEffect(() => {
    setRenderCount(prevCount => prevCount + 1); // Increment render count on every render
  }, [firstname, secondName]); // Run effect when firstname or secondName changes

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>Using useState</h3>
      <h2>Hi {name}</h2>
      <div>First:</div>
      <input
        type={"text"}
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <div>Last:</div>
      <input
        type={"text"}
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      />
      <div>Render Count: {renderCount}</div> {/* Display render count */}
    </div>
  );
};

export default Login;
