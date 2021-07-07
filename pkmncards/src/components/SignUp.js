import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "",
                username: "",
                password: "",
                img: "",
                bio: ""
            }
        }
    }

    handleChange = (event) => {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault()

        axios.post("http://localhost:3001/users/signup", this.state.user)
            .then(response => {
                this.props.history.push(`/profile/${response.data.id}`)
            })
          
    }

    render() {
        return (
            <div>
                
                <div >
                    <nav>
                        <Link to="/">Homepage</Link>
                    </nav>

                </div>
                        
                <h1>Pokemon collection cards</h1>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Sign Up</legend><br></br>
                            <label htmlFor="name">Name: </label>
                            <input onChange={this.handleChange} type="text" name="name" placeholder="name" /><br></br>
                            <label htmlFor="username">Username: </label>
                            <input onChange={this.handleChange} type="text" name="username" placeholder="username" /><br></br>
                            <label htmlFor="password">Password: </label>
                            <input onChange={this.handleChange} type="password" name="password" placeholder="password" /><br></br>
                            <label htmlFor="img">Image: </label>
                            <input onChange={this.handleChange} type="text" name="image" placeholder="image" /><br></br>
                            <label htmlFor="bio">Bio: </label>
                            <input onChange={this.handleChange} type="text" name="bio" placeholder="bio" /><br></br>
                            <input type="submit" value="Sign Up" />
                        </fieldset>

                    </form>


                </div>

            </div>
        )
    }
}


export default SignUp