import express from "express";
import authorization from "../middleware/authorization.js";
import {
  getAllLeftJoined,
  createTODO,
  updateTodo,
  deleteTODO,
} from "../utils/dashboard/helper.js";

export const router = express.Router();

router.get("/", authorization, getAllLeftJoined);

router.post("/todos", authorization, createTODO);

router.put("/:id", authorization, updateTodo);

router.delete("/:id", authorization, deleteTODO);
