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

    const data = [60,16,37,25,32,10,40,2,2,2,2,2,2];

    const w = 500;
    const h = 400;

    const accessToRef = d3.select(this.myRef.current)
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .style("background-color", "#cccccc")
        .style("padding", 10)
        .style("margin-left", 50);

    accessToRef.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d,i) => i *70)
        .attr("y", (d,i) => h-10*d)
        .attr("width", 65)
        .attr("height", (d,i) => d*10)
        .attr("fill", (d,i) => d > 35 ? "blue" : "red");

    }

    render() {
        return <div ref={this.myRef}>


        <div>
                    <Link className="return" to="/"><h3>Click Me To Return Back Home</h3></Link>
                   
            </div>
        </div>
    };
}
export default Chart;