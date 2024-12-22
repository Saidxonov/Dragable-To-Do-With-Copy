import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, provided }) {
  return (
    <ul
      className="todo-list"
      {...provided.droppableProps}
      ref={provided.innerRef}
    >
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} />
      ))}
      {provided.placeholder}
    </ul>
  );
}

export default TodoList;
