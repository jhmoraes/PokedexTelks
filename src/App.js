import Router from "./Routes/Router";
import { GlobalStyled } from "./GlobalStyled";
import axios from "axios";
import { BASE_URL } from "./constant/BASE_URL";
import React, { useEffect, useState } from "react";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = () => {
    axios
      .get(`${BASE_URL}pokemon?limit=20&offset=0`)
      .then((response) => {
        //caso de sucesso
        setAllPokemons(response.data.results);
      })
      .catch((error) => {
        //caso de erro
        console.log(error);
      });
  };

  return (
    <>
      <GlobalStyled />
      <Router allPokemons={allPokemons} />
    </>
  );
}

export default App;
