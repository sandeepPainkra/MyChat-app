import { TableContainer } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div classNAme="home">
      <Container>
        <div className="home_container">
          <Sidebar />
        </div>
      </Container>
    </div>
  );
};

export default Home;
