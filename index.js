import express from "express";

import { router as jwtAuthRoutes } from "./routes/jwtAuth.js";
import { router as dashboardRouter } from "./routes/dashboard.js";

import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import path from "path";

// Initializing App
dotenv.config();
const PORT = process.env.PORT || 1337;
const app = express();
let __dirname = path.resolve();

// Middlewares

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("common"));
app.use(helmet());

if (process.env.NODE_ENV === "production") {
  // Server static content
  app.use(express.static(path.join(__dirname, "client/build")));
}

console.log(path.join(__dirname, "client/build"));
// Routes

app.use("/auth", jwtAuthRoutes);
app.use("/dashboard", dashboardRouter);

// For everything
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => console.log(`${PORT}`));
