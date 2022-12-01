import React, { Component } from "react";

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "purple" };
    }
    render() {
        return(
            <div className="box" style={{backgroundColor: this.state.color}} onClick={this.handleClicks}>

            </div>
        )
    }
};

export default Box;