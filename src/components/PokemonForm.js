import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onHandleNewPokemon }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [frontImg, setFrontImg] = useState("");
  const [backImg, setBackImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: frontImg,
        back: backImg,
      },
    };

    console.log(newPokemon);
    onHandleNewPokemon(newPokemon);
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={hp}
            onChange={(e) => {
              setHp(e.target.value);
            }}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImg}
            onChange={(e) => {
              setFrontImg(e.target.value);
            }}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImg}
            onChange={(e) => {
              setBackImg(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
