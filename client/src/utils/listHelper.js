export async function deleteTodo(id, setTodos, todos) {
  try {
    await fetch(`/dashboard/${id}`, {
      method: "DELETE",
      headers: { token: localStorage.token },
    });

    setTodos(todos.filter((todo) => todo.todo_id !== id));
  } catch (err) {
    console.error(err.message);
  }
}
