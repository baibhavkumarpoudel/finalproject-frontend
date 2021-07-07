import React from "react";
import { Link, Route } from "react-router-dom";


const Home = () => {
    return (
        <div>
            
        <div>
            <h1> Gotta Collect Them All! </h1>

        </div>
        <div>
            <Link to="/login"><h1>Login!</h1></Link>
            <Link to="/signup"><h1>Sign up!</h1></Link>
        </div>
        </div>
    )
}


export default Home