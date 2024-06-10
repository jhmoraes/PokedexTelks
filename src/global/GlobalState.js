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

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };

  const data = {
    allPokemons,
    pokedex,
    setAllPokemons,
    addToPokedex,
    removeFromPokedex,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
