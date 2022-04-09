import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import Logo from "./Logo/vector/default-monochrome.svg";
const LandingPage = () => {
  const user = useSelector(selectUser);
  return (
    <div className="landingpage">
      <div className="landingContainer text-center text-light">
        <img src={Logo} alt="My logo" className="landingPage_logo" />

        <h1 className="text-light">Welcome To MyChat</h1>
        <p>
          With the help of MyChat App you can touch with your friends,relative
          and others..
        </p>
        <Link to={user ? "/login" : "/home"}>
          <button className="btn btn-lg btn-primary ">Login to MyChat</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
