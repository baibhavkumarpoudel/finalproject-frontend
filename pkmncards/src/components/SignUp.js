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
            <div className="signup-page">
                
                <div >
                    <nav>
                        <Link className="return-special" to="/">Click Me To Return Back Home</Link>
                    </nav>

                </div>
                        
                <h1 className="header">Sign Up To View Your Pokemon Cards ! ! !</h1>

                <div>
                    <form  onSubmit={this.handleSubmit}>
                        <div >
                            
                            <label htmlFor="name">Name: </label>
                            <input onChange={this.handleChange} type="text" name="name" placeholder="name" /><br></br><br></br>
                            <label htmlFor="username">Username: </label>
                            <input onChange={this.handleChange} type="text" name="username" placeholder="username" /><br></br><br></br>
                            <label htmlFor="password">Password: </label>
                            <input onChange={this.handleChange} type="password" name="password" placeholder="password" /><br></br><br></br>
                            <label htmlFor="img">Image: </label>
                            <input onChange={this.handleChange} type="text" name="image" placeholder="image" /><br></br><br></br>
                            <label htmlFor="bio">Bio: </label>
                            <input onChange={this.handleChange} type="text" name="bio" placeholder="bio" /><br></br><br></br>
                            <input className="button" type="submit" value="Sign Up" />
                        </div>

                    </form>


                </div>

            </div>
        )
    }
}


export default SignUp