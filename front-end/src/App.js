import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Profile from "./components/home/Profile";
import Signin from "./components/home/Signin";
import Signup from "./components/home/Signup";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default App;
