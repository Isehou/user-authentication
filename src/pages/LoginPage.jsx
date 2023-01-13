import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import "./style.css";

function LoginPage() {
  return (
    <div className="wrapper">
      <h1>Login</h1>
      <Login />
      <p>
        or <Link to="/register">register</Link>
      </p>
    </div>
  );
}

export default LoginPage;
