import React, { Component } from "react";
import axios from "axios";

export default class PokeLink extends React.Component {
  constructor(props) {
    super(props);
    // this.name = props.name;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios
      .get(`http://localhost:3001/api/pokemon/${this.props.name}`)
      .then((res) => {
        console.log("handleClick in PokeLink", res.data);
        this.props.displayPokemon(res.data);
      });
  }

  render() {
    console.log(this.props.name);
    return <a onClick={this.handleClick}>{this.props.name}</a>;
  }
}
