import React, { Fragment, useState } from "react";

const InputTodo = ({ setTodosChange }) => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      fetch("http://localhost:1337/dashboard/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
        body: JSON.stringify({ description }),
      })
        .catch((err) => console.log("error", err))
        .then((res) => res.json())
        .then(() => {
          setTodosChange(true);
          setDescription("");
        });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-5">Input Todo</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <hr />
        <button className="btn btn-success btn-block">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
