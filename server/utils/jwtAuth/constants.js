export const saltRound = 10
export const checkWithUserEmail = "SELECT * FROM users WHERE user_email = $1";
export const insertIntoUsers =
  "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *";
