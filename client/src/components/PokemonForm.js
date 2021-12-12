import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router";
import axios from "axios";

const PokemonForm = (props) => {

  const {id, addPokemon, name:initialName, location: initialLocation, move: initialMove, updatePokemon} = props;
  const [name, setName] = useState(initialName ? initialName : "");
  const [location, setLocation] = useState(initialLocation ? initialLocation : "");
  const [move, setMove] = useState(initialMove ? initialMove : "");

  // const params = useParams();
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({name: name, location: location, move: move});
    const pokemon = {name: name, location: location, move: move};

    if(id) {
      let response = await axios.put(`/api/pokemons/${id}`, pokemon);
      console.log(response.data);
      updatePokemon(response.data);
    }
    else{
      let response = await axios.post("/api/pokemons", pokemon);
      console.log(response.data);
      addPokemon(response.data);
    };
  };

  return (
    <div>
      <h1>{id ? "Edit" : "New"} Pokemon</h1>
      <form onSubmit = {handleSubmit}>
        <p>Name</p>
        <input required value = {name} onChange = {(e) => setName(e.target.value)}/>
        <p>Location</p>
        <input value = {location} onChange = {(e) => setLocation(e.target.value)}/>
        <p>Move</p>
        <input value = {move} onChange = {(e) => setMove(e.target.value)}/>
        <br />
        <br />
        <button>{id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default PokemonForm;