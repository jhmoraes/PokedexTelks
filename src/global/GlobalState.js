import { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../constant/BASE_URL";
import axios from "axios";

const GlobalState = (props) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = () => {
    axios
      .get(BASE_URL)
      .then((response) => {
        //caso de sucesso
        setAllPokemons(response.data.results);
      })
      .catch((error) => {
        //caso de erro
        console.log(error.response);
      });
  };

  // Adiciona o pokemon na Pokedex
  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      setPokedex([...pokedex, pokemonToAdd]);
    }
  };

  // Salva a Pokedex no Local Storage
  const saveLocalStorage = () => {
    const insertToLocalStorage = JSON.stringify(pokedex);
    localStorage.setItem("pokemons", insertToLocalStorage);
  };

  useEffect(() => {
    pokedex.length > 0 && saveLocalStorage();
  }, [pokedex]);

  const getItensLocalStorage = () => {
    const pokemonsLocalStorage = localStorage.getItem("pokemons");
    const pokemonsArray = JSON.parse(pokemonsLocalStorage);
    pokemonsArray && setPokedex(pokemonsArray);
  };

  useEffect(() => {
    getItensLocalStorage();
  }, []);

  const removeFromPokedex = (pokemonName) => {
    const newList = localStorage.getItem("pokemons");
    const getPokemon = JSON.parse(newList)
    const newPokedex = getPokemon.filter((pokemon) => pokemon.name !== pokemonName)
    newPokedex.length === 0 && localStorage.removeItem("pokemons")
    setPokedex(newPokedex)

  };

  const data = {
    allPokemons,
    pokedex,
    setAllPokemons,
    addToPokedex,
    getItensLocalStorage,
    removeFromPokedex,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
