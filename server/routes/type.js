const { default: axios } = require("axios");
const { Router } = require("express");
const type = Router();
const fs = require('fs');

type.get("/:type", (req, res) => {
  let { type } = req.params; 

  axios.get(`https://pokeapi.co/api/v2/type/${type}`)
  .then(response => {
    let pokemons = [];
    response.data.pokemon.forEach(element => pokemons.push(element.pokemon.name));
    res.send(pokemons);
  });


});

module.exports = type;
