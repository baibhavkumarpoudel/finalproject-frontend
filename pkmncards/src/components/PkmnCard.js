import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import char from '../images/char.gif'

class PkmnCard extends Component {
    constructor(props) {
        super();
        this.state = {
            pcard: {
                name: "",
                history: "",
                img: "",
                dateOfRelease: ""

            }
        }
    }



componentDidMount = () => {
    axios.get(`http://localhost:3001/pcards/${this.props.match.params.id}`)
    .then(response => 
        this.setState ({
            pcard: response.data
        }))
}

    render() {
       
        const pcard = this.state.pcard
        return (
            <div className="pkmncard">
              
                        
                <h1 className="here">Who's That Pokemon ?!?</h1>

                <div className="pcard-indi">
                    <h1>{pcard.name}</h1>  
                    <h2>{pcard.history}</h2> 
                    <img  src={pcard.img} alt="pokemon pic"/>
                    <h2>{pcard.dateOfRelease}</h2>
                </div>
                <img className="char" src={char} alt="gif" />
            </div>
        )
    }
}

export default PkmnCard