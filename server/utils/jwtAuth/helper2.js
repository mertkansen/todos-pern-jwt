import { query } from "../../db.js";
import bcrypt from "bcrypt";

import { checkWithUserEmail, insertIntoUsers, saltRound } from "./constants.js";

export const checkIfUserExists = async (user_email) => {
  const user = await query(checkWithUserEmail, [user_email]);

  return user;
};

export const cryptUserPassword = async (user_password) => {
  const salt = await bcrypt.genSalt(saltRound);
  let pwd;
  await bcrypt.hash(user_password, salt).then((p) => {
    pwd = p;
  });

  return pwd;
};

export const insertCryptedUserIntoDB = async (
  user_name,
  user_email,
  crypted_password
) => {
  try {
    const newUser = await query(insertIntoUsers, [
      user_name,
      user_email,
      crypted_password,
    ]);

    return newUser;
  } catch (err) {
    res.send(err.message);
  }
};

export const decryptPassword = async (user_password, password_from_db) => {
  const val = await bcrypt.compare(user_password, password_from_db);

  return val;
};
