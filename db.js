import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, //heroku addons
};

const pool = new pg.Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);

export const query = (text, params) => pool.query(text, params);
