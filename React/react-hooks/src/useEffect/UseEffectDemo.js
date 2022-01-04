import React, { useState, useEffect } from "react";

export default function UseEffectDemo() {
  const [resourceType, setResourceType] = useState("posts");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // This empty array lead to onMount because it only happens the first time you render it, it won't change later
  useEffect(() => {
    console.log("onMount");
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <h2>The size of the window is: {windowWidth}</h2>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}
