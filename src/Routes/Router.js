import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import Error from "../Pages/Error/Error";
import GlobalState from "../global/GlobalState";

const Router = () => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/pokemondetails/:name" element={<PokemonDetailPage />} />
          <Route path="/pokemonlist" element={<PokemonListPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
};

export default Router;
