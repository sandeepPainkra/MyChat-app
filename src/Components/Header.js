import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./Logo/vector/default-monochrome-black.svg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#">
            <img src={Logo} className="logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link title="Login" className="btn btn-lg px-2 ">
                <Link to="/login">
                  <AccountCircleIcon fontSize="large" />
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
