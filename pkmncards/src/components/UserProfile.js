import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EditProfile from "./EditProfile";
import Pcards from "./Pcards"
import pokemon from '../images/pokemon.gif'


class UserProfile extends Component {
    constructor(props){
        super()
        this.state = {
            user: {
                name: "",
                username: "",
                password: "",
                img: "",
                bio: "",
                pcardId: ""
            },
            pcards: []
        }
    }


componentDidMount = () => {
    axios.get(`http://localhost:3001/users/profile/${this.props.match.params.id}`)
        .then(response => {
            
            this.setState({
                user: response.data.user,  
                pcards: response.data.pcard
            })
        })
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

    axios.put(`http://localhost:3001/users/profile/${this.props.match.params.id}`, this.state.user)
        .then(response =>
            console.log("it's actually working"))
}

handleDelete = async (event) => {
    await axios.delete(`http://localhost:3001/users/profile/${this.props.match.params.id}`)
        .then(response => {
            this.props.history.push('/')
        })
}


render() {

    const user = this.state.user;
    const pcards = this.state.pcards;

    return (
        <div>

            <div>
                    <Link className="return" to="/"><h3>Click Me To Return Back Home</h3></Link>
                   
            </div>
 
            <div>
                <h1 className="Welcome">Welcome, {user.name}! </h1>
                
                <form className="UserBody">
                    
                    
                    <h2>  <label htmlFor="username">Username: </label>{user.username}</h2> 
                    <h2>  <label htmlFor="password">Password: </label>{user.password}</h2> <br></br>
                    <img  src={user.img} />
                    <h2>  <label htmlFor="bio"></label>{user.bio}</h2> <br></br>
                    <Link className="poke-card" to="/pcards"><h3> Click Here For Your Pokémon Card Collections</h3></Link> <br></br>
                    <Link className="poke-card" to="/charts"><h3>Click Here to View Pokémon Card Prices in Bar Graph!</h3></Link>
                </form>
                <div className="edit">
                    <EditProfile
                        pcards={pcards}
                        user={this.state.user}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleDelete={this.handleDelete}
                    />

                    <img className="gifmon" src={pokemon} alt="gifmon" />
                </div>

            </div>
        </div>
    )
}
}

export default UserProfile
