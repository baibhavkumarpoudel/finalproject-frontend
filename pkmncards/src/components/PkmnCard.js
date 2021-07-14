import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


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
            <div>
                <div>
                    <Link to="/">Go Home</Link>
                </div>
                        
                <h1 >Who's That Pokemon!</h1>

                <div>
                    <h1>{pcard.name}</h1>  
                    <h2>{pcard.history}</h2> 
                    <img  src={pcard.img} alt="pokemon pic"/>
                    <h2>{pcard.dateOfRelease}</h2>
                </div>
                
            </div>
        )
    }
}

export default PkmnCard