import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";


class Pcards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pcards : []
        }
    }


componentDidMount = () => {
    axios.get("http://localhost:3001/pcards/pcards")
    .then(response => {
        this.setState({
            
            pcards: response.data
        })
    })
}

render() {
    
    return (
        <div className="pcards">
            
            
            <h1 className="here">Here are Pokémon Cards!</h1>

            <div>

                {this.state.pcards.map(pcard => {
                    return (
                        <div >
                            <Link className="pcards-render" to={`/pcards/${pcard.id}`}>
                                <h2>{pcard.name}</h2>
                                <img src={pcard.img} alt="pokemon" />
                                <h2>{pcard.history}</h2>
                                <h2>Date of Release: {pcard.dateOfRelease}</h2>  
                                <h2 className="line">---------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                </h2>
                            </Link>
                           
                        </div>
                    )
                })}          
            </div>
        </div>
    )
}
}

export default Pcards