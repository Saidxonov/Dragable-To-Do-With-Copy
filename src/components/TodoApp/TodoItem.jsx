import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./TodoItem.css";

function TodoItem({ todo, index }) {
  return (
    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <li
          className="todo-item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todo.text}
        </li>
      )}
    </Draggable>
  );
}

export default TodoItem;
