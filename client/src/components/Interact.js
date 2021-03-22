import React, { Component } from "react";

export default class Interact extends React.Component {
    constructor(props) {
        super(props);
        this.pokemon = props.pokemon;

        this.state = {isCaught: false};
        this.handleClick = this.handleClick.bind(this);
      }
    
    handleClick(){
        if (this.isCaught) this.setState({isCaught: false});
        else this.setState({isCaught: true});
    }

    render(){
        let text;
        if (this.state.isCaught) text = 'Release';
        else text = 'Catch';

        return <button onClick={this.handleClick}>{text}</button>
    }
}