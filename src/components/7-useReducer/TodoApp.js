import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../customHooks/useForm";
import "../styles.css";
const TodoApp = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispacth] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [{ description }, handleInput, reset] = useForm({ description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action = {
      type: "add",
      payload: newTodo,
    };

    dispacth(action);
    reset();
  };

  const handleDelete = (todoId) => {
    dispacth({
      type: "delete",
      payload: todoId,
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
          <ul className="list-group list-group-flush m-t1">
            {todos.map((todo, i) => (
              <li className="list-group-item" key={todo.id}>
                <p
                  className={`${todo.done && "complete"}`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {i + 1}. {todo.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/*  */}
        <div className=" col 5">
          <h4>Agregar todo</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="aprender..."
              onChange={handleInput}
              value={description}
            />

            <button
              type="submit"
              className=" btn btn-outline-primary mt-2 btn-block"
            >
              {" "}
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
