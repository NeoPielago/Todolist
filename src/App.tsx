import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

function App() {
  const [todo, setTodo] = useState<string>("");

  console.log(todo);
  return (
    <>
      <div className="app">
        <span className="heading">Todo List</span>
        <InputField todo={todo} setTodo={setTodo}></InputField>
      </div>
    </>
  );
}

export default App;
