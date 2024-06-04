import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import Error from "../Pages/Error/Error";
import React from "react";

const Router = ({ allPokemons }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home allPokemons={allPokemons} />} />
        <Route path="/pokemondetail" element={<PokemonDetailPage />} />
        <Route path="/pokemonlist" element={<PokemonListPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
