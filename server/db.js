import pg from "pg";

const pool = new pg.Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "authtododb",
});

export const query = (text, params) => pool.query(text, params);
