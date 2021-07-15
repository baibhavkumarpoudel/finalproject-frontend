import React, { Component } from 'react';
import * as d3 from 'd3';
import { render } from '@testing-library/react';
import { Link } from "react-router-dom";

class Chart extends Component {

    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }

    componentDidMount () {

    const data = [2.50,2.75,93.20,2.20,1.75,403.33,3.94,2.37,118.22,.68,.87,5.46,3.41,34.45,.83,2.51,4.57,14.01,1.44,8.57,35,28.86,150];

    const w = 1670;
    const h = 500;

    const accessToRef = d3.select(this.myRef.current)
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .style("background-color", "rgb(46, 41, 41)")
        .style("padding", 100)
        .style("margin-left", 10);

    accessToRef.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d,i) => i *75)
        .attr("y", (d,i) => h-10*d)
        .attr("width", 50)
        .attr("height", (d,i) => d*10)
        .attr("fill", (d,i) => d > 34 ? "white" : "yellow");

    }

    render() {
        return <div 
        
        
        ref={this.myRef}>

        
        <div>
                    
                    <h3 className="yellow">less than or equal to $34 - Yellow </h3>
                    <h3 className="white">more than $34 - White </h3>
                    <h4 className="graph">Bulbasaur Ivysaur Venusaur Charmander Charmeleon Charizard Squirtle Wartortle Blastoise Caterpie Metapod Butterfree Pikachu Raichu Growlithe Arcanine Kangaskhan Scyther Dratini Dragonair Dragonite Mewtwo Mew</h4>
            </div>
        </div>
    };
}
export default Chart;