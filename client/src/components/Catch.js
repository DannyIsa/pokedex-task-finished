import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Catch({ pokemon }) {
  let [isCatched, setIsCatched] = useState(Boolean);

  useEffect(() => {
    axios.get("http://localhost:3001/api/collection").then((res) => {
      let found = res.data.filter((name) => name === pokemon);
      if (found.length === 0) {
        setIsCatched(false);
      } else {
        setIsCatched(true);
      }
    });
  }, [pokemon]);
  const catchPokemon = () => {
    axios.post(`http://localhost:3001/api/collection/catch/${pokemon}`);
    setIsCatched(true);
  };
  const releasePokemon = () => {
    axios.delete(`http://localhost:3001/api/collection/release/${pokemon}`);
    setIsCatched(false);
  };
  return (
    <div>
      {isCatched ? (
        <button onClick={releasePokemon}>Release</button>
      ) : (
        <button onClick={catchPokemon}>Catch</button>
      )}
    </div>
  );
}