import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authorization = async (req, res, next) => {
  try {
    // GET The JWT Token
    const jwtToken = req.header("token");

    if (!jwtToken) { // if it doesn'exist
      res.status(403).send({
        message: "You are not authorized",
      });
    }

    // Check to verify 
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);

    // if checked
    // give it to the req.user - .id -
    req.user = payload.user;

    next();
  } catch (err) {
    res.status(403).send({
      message: "You are not authorized",
    });
  }
};

export default authorization;
