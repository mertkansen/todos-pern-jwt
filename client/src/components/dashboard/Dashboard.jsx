import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

// Helper
import { getName } from "../../utils/dashboardHelper";

// Comps
import { InputTodo, ListTodos } from "./todoList";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [todosChange, setTodosChange] = useState(false);

  const logout = (e) => {
    localStorage.removeItem("token");
    setAuth(false);
    toast.success("You logged out successfully!");
  };

  useEffect(() => {
    getName(setName, setAllTodos);

    return () => setTodosChange(false);
  }, [todosChange]);

  return (
    <div className="container">
      <div className="d-flex mt-5">
        <h3>Dashboard</h3>
        <h2>{name}'s Todo List</h2>
        <button className="btn btn-primary btn-block" onClick={logout}>
          Log out
        </button>
      </div>
      <hr />
      <InputTodo setTodosChange={setTodosChange} />
      <hr />
      <ListTodos allTodos={allTodos} setTodosChange={setTodosChange} />
    </div>
  );
};

export default Dashboard;
