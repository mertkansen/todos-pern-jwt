import React, { useState, useEffect } from "react";
import EditTodo from "./EditTodo";

import { deleteTodo } from "../../../utils/listHelper";

const ListTodos = ({ allTodos, setTodosChange }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(allTodos);
  }, [allTodos]);

  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos?.length !== 0 &&
            todos[0].todo_id !== null &&
            todos.map((todo) => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} setTodosChange={setTodosChange} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.todo_id, setTodos, todos)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
