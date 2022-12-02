import React, { Component } from "react";
import Box from "./Box";
import "./Container.css";

class Container extends Component {
    static defaultProps = {
        numBoxes: 18,
        colors: ["#304D63", "#B2E7E8", "#8FB9AA", "#F2D096", "#ED8975"]
    };
    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => 
        (<Box set={this.props.colors}/>));
        return <div className="container">{boxes}</div>
    };
};

export default Container;