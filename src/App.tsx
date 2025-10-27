import { useState } from 'react';
import { useEffect } from "react";
import './App.css';

import PokemonCard from "./components/PokemonCard.tsx";
import NavBar from './components/NavBar.tsx';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color : "#78C850", 
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    color : "#faa307",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    color : "#90e0ef" ,
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    color : "#ffd60a" ,
  },
  {
    name: "mew",
    color : "#EE99AC" ,
  },
];


function App() {

  useEffect( () => {
    alert("hello pokemon trainer :)");
  }, []);

  const [pokemonName, setPokemonName] = useState("bulbasaur");
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <NavBar setPokemonName={setPokemonName} pokemonList={pokemonList} />
      <PokemonCard pokemon={pokemon} />
      </div>
    
  );
}



export default App
