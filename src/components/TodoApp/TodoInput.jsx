import React, { useState } from "react";
import "./TodoInput.css";

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  }

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Todo qo'shish..."
      />
      <button type="submit">Qo'shish</button>
    </form>
  );
}

export default TodoInput;
