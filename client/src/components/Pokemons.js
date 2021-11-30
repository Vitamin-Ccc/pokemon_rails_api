import React, {useEffect, useState} from "react";
import axios from 'axios';
import Pokemon from "./Pokemon";
import PokemonForm from "./PokemonForm";

const Pokemons = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() =>{
    console.log("mounted");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    let response = await axios.get("/api/pokemons");
    setPokemons(response.data);
  };

  const renderPokemons = () => {
    if(pokemons.length === 0) {
      return <p>No Pokemons</p>;
    }
    return pokemons.map((pokemon) => {
      return <Pokemon key = {pokemon.id} {...pokemon} />
    })
  };

  return (
    <div style = {{ border: "4px solid green", margin: "5px", padding: "5px"}}>
      <h1>Pokemons</h1>
      <PokemonForm />
      {renderPokemons()}
    </div>
  );
};

export default Pokemons;