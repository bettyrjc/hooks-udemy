import React from "react";
import { useForm } from "../customHooks/useForm";

const AddTodo = ({ handleAddTodo }) => {
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

    handleAddTodo(newTodo);
    reset();
  };
  return (
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
  );
};

export default AddTodo;
