import React, { Component } from 'react';
import axios from "axios";
import PokeImage from "./PokeImage";
import TypeLink from "./TypeLink";
import Catch from "./Catch";

export default class Pokemon extends Component {
    constructor(props) {
      super(props);
      console.log(props.data);
    }

    render() {
      if (!this.props.data) {
        return null;
      }
      return (
        <div
          style={{
            border: "1px solid black",
            width: "200px",
            margin: "5px",
            padding: "5px",
          }}
        >
          <PokeImage data={this.props.data} />
          <p>
            <b>{this.props.data.name}</b>
          </p>
          <p>
            <b>type:</b> {this.props.data.types.map(type => <span><TypeLink key={type} type={type} clickedType={this.props.clickedType} /> </span> )}
          </p>
          <p>
            <b>weight:</b> {this.props.data.weight}
          </p>
          <p>
            <b>height:</b> {this.props.data.height}
          </p>
          <p>
            <Catch pokemon={this.props.data.name} />
          </p>
        </div>
      );
  }
  }