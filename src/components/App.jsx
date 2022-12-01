import React, { useState } from "react";

function App() {
  const [todo, settodo] = useState([]);
  const [newtodo, setnewtodo] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setnewtodo(value);
  }

  function handleclick(e) {
    settodo((prevalue) => {
      return [...prevalue, newtodo];
    });
    setnewtodo(""); //this used to clear inputfield after add clicked
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newtodo} />
        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          {todo.map((element) => (
            <li>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
