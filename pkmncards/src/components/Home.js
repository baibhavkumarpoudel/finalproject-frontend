import React from "react";
import { Link, Route } from "react-router-dom";
import Pcards from "./Pcards"

const Home = () => {
    return (
        <div className="home">
            
        <div className = "logo">
           

        </div>
        <div>
       
            <Link className="login" to="/login"><h1>Login!</h1></Link>
            <Link className="login" to="/signup"><h1>Sign up!</h1></Link>
            
        </div>
        </div>
    )
}


export default Home