import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoCard from "./components/TodoCard";

function App() {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <div className="app">
        <span className="heading">Todo List</span>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleTodo={handleTodo}
        ></InputField>
        <TodoCard todos={todos} setTodos={setTodos}></TodoCard>
      </div>
    </>
  );
}

export default App;
