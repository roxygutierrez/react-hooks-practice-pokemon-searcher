import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((resp) => resp.json())
      .then((pokemonArr) => setPokemons(pokemonArr));
  }, []);

  const filteredPokemon = pokemons.filter((pokemon) => {
    return pokemon.name.toUpperCase().includes(search.toUpperCase());
  });

  const handleNewPokemon = (pokemon) => {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemon),
    })
      .then((resp) => resp.json())
      .then((newPokemon) => setPokemons([...pokemons, newPokemon]));
  };

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onHandleNewPokemon={handleNewPokemon} />
      <br />
      <Search onPokemonSearch={setSearch} />
      <br />
      <PokemonCollection pokemons={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
