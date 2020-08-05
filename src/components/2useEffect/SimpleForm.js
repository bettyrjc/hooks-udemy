import React, { useState, useEffect } from "react";

import Message from "./Message";
import "../styles.css";

const SimpleForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const { name, email } = form;
  useEffect(() => {
    // console.log("hoka");
  }, []);
  // cuando quieres escuchar un cambio en especifico cuando cambie
  // aqui es todo el form
  useEffect(() => {
    // console.log("cambio form");
  }, [form]);
  // aqui es form.email

  useEffect(() => {
    // console.log("cambio form email");
  }, [form.email]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <h1>useForm</h1>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          value={name}
          onChange={handleInput}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          value={email}
          onChange={handleInput}
        />
      </div>

      {name === "betty" && <Message />}
    </div>
  );
};
export default SimpleForm;
