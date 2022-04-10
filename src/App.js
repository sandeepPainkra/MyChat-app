import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Login from "./Components/Login.js";
import LandingPage from "./Components/LandingPage.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogIn, selectUser } from "./features/userSlice";
import { auth } from "./Components/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      dispatch(
        LogIn({
          displayName: authUser.displayName,
          email: authUser.email,
          photoURL: authUser.photoURL,
        })
      );
    });
  }, []);

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
