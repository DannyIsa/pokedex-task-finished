import React, { Component } from "react";
import PokeLink from "./PokeLink";

export default class TypeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.typeList) return null;
    return (
      <>
        <h2>Pokemons</h2>
        {this.props.typeList.map((pokemon) => (
          <li>
            <PokeLink
              key={pokemon}
              name={pokemon}
              displayPokemon={this.props.displayPokemon}
            />
          </li>
        ))}
      </>
    );
  }
}
