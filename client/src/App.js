import "./App.css";
import Search from "./components/Search";
import Pokemon from "./components/Pokemon";
import TypeList from "./components/TypeList";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pokemonData: "", typeList: "", isFound: true };
    this.displayPokemon = this.displayPokemon.bind(this);
    this.clickedType = this.clickedType.bind(this);
    this.isFound = this.isFound.bind(this);
  }

  displayPokemon(pokemonData) {
    this.setState({ pokemonData: pokemonData });
  }

  clickedType(type) {
    axios.get(`http://localhost:3001/api/type/${type}`).then((res) => {
      this.setState({ typeList: res.data });
    });
  }

  isFound(answer) {
    this.setState({ isFound: answer });
  }

  render() {
    return (
      <div>
        <Search displayPokemon={this.displayPokemon} isFound={this.isFound} />
        <Pokemon data={this.state.pokemonData} clickedType={this.clickedType} />
        <TypeList
          typeList={this.state.typeList}
          displayPokemon={this.displayPokemon}
        />
        {!this.state.isFound && <p>Pokemon not found</p>}
      </div>
    );
  }
}

export default App;
