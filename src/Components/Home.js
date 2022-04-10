import { TableContainer } from "@material-ui/core";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Chat from "./Chat.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Login from "./Login";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  // useEffect(() => {
  //   if (!user || navigate() === "http://localhost:3000/home") {
  //     navigate("/login");
  //   } else {
  //     console.log("user is present");
  //   }
  // }, []);
  console.log(user);
  return (
    <>
      {!user ? (
        <div className="forLogin">
          <Link to="/login" className="btn btn-primary">
            You are not loged in Go to login page and please login
          </Link>
        </div>
      ) : (
        <div classNAme="home">
          <Container>
            <div className="home_container">
              <Sidebar />
              <Chat />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Home;
