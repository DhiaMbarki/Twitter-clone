import React, { useEffect, createContext, useReducer, useContext } from "react";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import "./App.css";

import Signup from "./components/home/login/Signup";
import Signin from "./components/home/login/Signin";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import AddPost from "./components/home/AddPost";
import Profile from "./components/home/profile/Profile";
import { reducer, initialState } from "./reducers/Reducers";
export const UserContext = createContext();

const Routing = () => {
  const history = useHistory;
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!history.location.pathname.startsWith('/reset'))
           history.push('/signin')
    }
  },[])
 
  return (
    <Switch>
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
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Nav />

        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
