import React, { Component } from 'react';
export default class PokeImage extends Component {
    constructor(props) {
        super(props);
        
      }

    render() {
        return (
            <img src={this.props.data.front_url}
            onMouseOver={(event) => event.target.src = this.props.data.back_url}
            onMouseOut={(event) => event.target.src = this.props.data.front_url} 
            />
        );
    }
}