import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import "./style.css";

function HomePage() {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div className="wrapper">
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <Link to="/login">
      <h1>Register</h1>
    </Link>
  );
}

export default HomePage;
