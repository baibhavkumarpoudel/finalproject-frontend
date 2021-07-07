import logo from './logo.svg';
import './App.css';
import React from "react";
import {Link, Route} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


function App() {
  return (
    <div className="App">
      <h1> Hello mate</h1>

      <Route path="/" exact render={() => <Home />} />

      <Route path="/login" render={(props) => <Login {...props} /> } />

      <Route path="/signup" render={(props) => <SignUp {...props}/> } />
    </div>
  );
}

export default App;
