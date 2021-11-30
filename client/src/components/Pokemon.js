import React from "react";

const Pokemon = (props) => {
  return (
    <div style = {{ border: "4px solid gray", margin: "5px", padding: "5px"}}>
      <p>ID: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Location: {props.location}</p>
      <p>Move: {props.move}</p>
    </div>
  );
};

export default Pokemon;