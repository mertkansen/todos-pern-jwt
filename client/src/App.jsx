import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Dashboard, Login, Register, Landing } from "./components";

// For notification
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//HELPER
import { isAuth } from "./utils/appHelper";
toast.configure();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (bool) => setIsAuthenticated(bool);

  useEffect(() => {
    isAuth(setIsAuthenticated);
  }, []);

  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) =>
            !isAuthenticated ? <Landing {...props} /> : <Redirect to="/login" />
          }
        />
        <Route
          exact
          path="/login"
          render={(props) =>
            !isAuthenticated ? (
              <Login {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/register"
          render={(props) =>
            !isAuthenticated ? (
              <Register {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/dashboard"
          render={(props) =>
            isAuthenticated ? (
              <Dashboard {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Redirect from="/" to="/dashboard" />
      </Switch>
    </div>
  );
};

export default App;
