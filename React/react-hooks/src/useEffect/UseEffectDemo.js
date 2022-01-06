import React, { useState, useEffect } from "react";

export default function UseEffectDemo() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // This empty array [] lead to onMount as it only happens the first time you render it, it won't change later between different renders
  useEffect(() => {
    console.log("onMount");
    // useEffect will run only one time with empty []
  }, []);

  useEffect(() => {
    // whenever resource type changed, it will execute console.log "Resource type changed!"
    console.log("Resource type changed!");
    // Clean up code: Whenever useEffect rendered / Component unMounted, return code rendered first to clean up what we did last time
    return () => {
      console.log("Clean up resouce type");
    };
  }, [resourceType]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

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
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
