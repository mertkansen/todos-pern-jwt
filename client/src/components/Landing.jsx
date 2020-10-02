import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="jumbotron mt-5">
      <h1>Welcome to Todo city</h1>
      <p>Sign in and start your todo list</p>
      <Link to="/login" className="btn btn-primary btn-block">
        Login
      </Link>
      <Link to="/register" className="btn btn-primary btn-block">
        Register
      </Link>
    </div>
  );
};

export default Landing;
