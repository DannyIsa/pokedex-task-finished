const { Router } = require("express");
const pokemon = Router();
const { default: axios } = require("axios");
const fs = require("fs");
const { rejects } = require("assert");

pokemon.get("/:name", (req, res) => {
  let { name } = req.params;
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      console.log("status", response.status);
      let types = [];

      for (let slot of response.data.types) types.push(slot.type.name);

      let data = {
        name: name,
        types: types,
        weight: response.data.weight,
        height: response.data.height,
        front_url: response.data.sprites.front_default,
        back_url: response.data.sprites.back_default,
      };

      return res.send(data).status(200);
    })
    .catch((error) => res.sendStatus(404));
});

module.exports = pokemon;
