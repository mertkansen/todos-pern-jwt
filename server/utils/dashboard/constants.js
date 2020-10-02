export const getAllWithLeftJoin =
  "SELECT u.user_name, t.todo_id, t.description FROM users AS u LEFT JOIN todos AS t on u.user_id = t.user_id WHERE u.user_id = $1";

export const insertIntoTodos =
  "INSERT INTO todos (user_id, description) VALUES ($1, $2) RETURNING *";

export const updateTodoWithUserID =
  "UPDATE todos SET description = $1 WHERE todo_id = $2 AND user_id = $3 RETURNING *";
