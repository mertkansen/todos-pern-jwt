import { query } from "../../db.js";
import {
  getAllWithLeftJoin,
  insertIntoTodos,
  updateTodoWithUserID,
} from "./constants.js";

export const getAllLeftJoined = async (req, res) => {
  try {
    const user = await query(getAllWithLeftJoin, [req.user.id]);

    res.json(user.rows);
  } catch (err) {
    res.status(500).send({ message: "Server Error" });
  }
};

export const createTODO = async (req, res) => {
  const { description } = req.body;
  try {
    const user = await query(insertIntoTodos, [req.user.id, description]);

    res.json(user.rows[0]);
  } catch (err) {
    res.status(500).send({ message: "Error occured creating new todo." });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const { id } = req.params;

    const updatedVal = await query(updateTodoWithUserID, [
      description,
      id,
      req.user.id,
    ]);

    if (updatedVal.rows.length === 0) {
      return res.json({ message: "This todo is not yours!" });
    }

    res.json(updatedVal.rows[0]);
  } catch (err) {
    res.status(500).send({ message: "Error occured updating new todo." });
  }
};

export const deleteTODO = async (req, res) => {
  try {
    const { id } = req.params;

    const deletion = await query(
      "DELETE FROM todos WHERE todo_id = $1 and user_id = $2 RETURNING *",
      [id, req.user.id]
    );

    if (deletion.rows.length === 0) {
      return res
        .status(500)
        .send({ message: "This has to be your own todo to delete." });
    }

    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).send({ message: "Error occured whilst deleting." });
  }
};
