import React from "react";
import "./App.css";
import Header from "./Components/Header.js";
import Chat from "./Components/Chat.js";
import Sidebar from "./Components/Sidebar.js";
import { Container } from "react-bootstrap";
import Home from "./Components/Home.js";
import Login from "./Components/Login.js";
import LandingPage from "./Components/LandingPage.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <LandingPage />
              </>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
