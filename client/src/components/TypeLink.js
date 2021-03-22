import React, { Component } from "react";
import PokeLink from "./PokeLink";
export default class TypeLink extends React.Component {
    constructor(props) {
        super(props);
        this.type = props.type;
        this.handleClick = this.handleClick.bind(this);
      }
    
    handleClick(){
        console.log('clicked');
        this.props.clickedType(this.type);
    }

    render(){
     return <a onClick={this.handleClick}>{this.type}</a>
    }
}