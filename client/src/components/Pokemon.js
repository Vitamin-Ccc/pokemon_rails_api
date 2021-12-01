import React, { useState} from "react";
import PokemonForm from "./PokemonForm";

const Pokemon = (props) => {
  const [showForm, setShowForm] = useState(false);
  const {id, name, location, move, updatePokemon, deletePokemon} = props;

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div style = {{ border: "4px solid gray", margin: "5px", padding: "5px"}}>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <p>Move: {move}</p>
      <br />
      <button onClick={toggleForm}>
        {showForm ? "Cancel" : "Edit"}
        </button>
      {showForm && 
        <PokemonForm 
          id={id} 
          name={name} 
          location={location} 
          move={move} 
          updatePokemon={updatePokemon}
        />
      }
      <br/>
      <br/>
      <button onClick = {() => deletePokemon(id)}>DELETE</button>
    </div>
  );
};

export default Pokemon;