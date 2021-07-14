import logo from './logo.svg';
import './App.css';
import React from "react";
import {Link, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Pcards from './components/Pcards';
import UserProfile from "./components/UserProfile";
import PkmnCard from './components/PkmnCard';

function App() {
  return (
    <div className="App">
      <h1 className="header"> Gotta catch'em all ! </h1>

      <Route path="/" exact render={() => <Home />} />

      <Route path="/login" render={(props) => <Login {...props} /> } />

      <Route path="/signup" render={(props) => <SignUp {...props}/> } />

      <Route path="/pcards" exact render={() => <Pcards /> } />

      <Route path="/profile/:id" render={(props) => <UserProfile {...props}/> } />

      <Route path="/pcards/:id" render={(props) => <PkmnCard {...props} /> } />
    </div>
  );
}

export default App;
