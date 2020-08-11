import React from "react";
import TodoListItem from "./TodoListItem";
const TodoList = ({ todos, handleDelete, handleToggle }) => {
  console.log(todos);

  return (
    <ul className="list-group list-group-flush m-t1">
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          index={i}
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
