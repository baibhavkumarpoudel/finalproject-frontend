import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "",
                password: ""
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
        axios.post("http://localhost:3001/users/login", this.state.user)
            .then(response => {
                this.props.history.push(`/profile/${response.data.id}`)
            })
            .catch(err => {
                console.log(err)
                alert("You're not that guy pal")
            })
    }

    render() {
        return (
            <div>
                
                <div>
                    <nav>
                        <Link to="/">Homepage</Link>
                    </nav>
                </div>
                
                <h1>Login Page</h1>

                <div>

                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Login!</legend><br></br>
                            <label htmlFor="username">Username: </label><input onChange={this.handleChange} type="text" name="username" placeholder="username" /> <br></br>
                            <label htmlFor="password">Password: </label><input onChange={this.handleChange} type="password" name="password" placeholder="password" /><br></br><br></br>
                            <input type="submit" value="Login" />
                        </fieldset>

                    </form>

                </div>

            </div >
        )
    }
}

export default Login