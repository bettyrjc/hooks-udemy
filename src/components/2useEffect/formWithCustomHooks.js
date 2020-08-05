import React from "react";
import { useForm } from "../customHooks/useForm";
import "../styles.css";

const FormWithCustomHooks = () => {
  const [form, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <h1>useForm</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary"> Enviar</button>
      </form>
    </div>
  );
};
export default FormWithCustomHooks;
