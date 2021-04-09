import React from "react";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import "./App.css";

import Signup from "./components/home/login/Signup";
import Signin from "./components/home/login/Signin";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import AddPost from "./components/home/AddPost";
import Profile from "./components/home/profile/Profile";
function App() {
  
  return (
    <div className="back">
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
      <Route path="/addPost">
        <AddPost />
      </Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
