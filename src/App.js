import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className = "grid-container">
      
      {data.map((item) => (
        <ol key={item.id}>
          <div className="grid-item">name = {item.name}</div>
          <div className="grid-item"> username = {item.username}</div>
          <div className="grid-item">address = {item.address.street}</div>
          <div className="grid-item"> phone = { item.phone }</div>
          <div className="grid-item"> website = { item.website }</div>
          </ol>
      ))}
    </div>
  );
};

export default App;
