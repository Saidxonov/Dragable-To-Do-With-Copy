import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import "./TodoApp.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(text) {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text }]);
    }
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const reorderedTodos = Array.from(todos);
    const [removed] = reorderedTodos.splice(result.source.index, 1);
    reorderedTodos.splice(result.destination.index, 0, removed);

    setTodos(reorderedTodos);
  }

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoInput onAddTodo={handleAddTodo} />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => <TodoList todos={todos} provided={provided} />}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default TodoApp;
