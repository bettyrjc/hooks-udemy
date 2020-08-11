import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import "../styles.css";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
const TodoApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispacth] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    dispacth({
      type: "delete",
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispacth({
      type: "add",
      payload: newTodo,
    });
  };

  const handleToggle = (todoId) => {
    dispacth({
      type: "toggle",
      payload: todoId,
    });
  };

  return (
    <div>
      <h1>Todo app ({todos.length})</h1>

      <div className="row">
        <div className=" col 7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        {/*  */}
        <AddTodo handleAddTodo={handleAddTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
