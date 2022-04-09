import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogIn, selectUser } from "../features/userSlice";
import { auth, provider } from "./firebase";
import login_image from "./Logo/vector/default-monochrome.svg";
const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const SignIN = () => {
    if (user) {
      navigate("/home");
      console.log("login successfull");
    } else {
      auth.signInWithPopup(provider).catch((error) => {
        alert(error.message);
      });
    }
  };
  return (
    <div className="login">
      <div className="login_container text-center">
        <img src={login_image} alt="login image" />
        <h2>Login In our MyChat</h2>
        <button onClick={SignIN} className="btn btn-secondary myBtn">
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
