export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToPokemonList = (navigate) => {
  navigate("/pokemonlist");
};

/* export const goToPokemonDetail = (navigate, pokemonName) => {
  navigate(`pokemon#${pokemonName}`);
}; */

export const goToPokemonDetail = (navigate) => {
  navigate(`/pokemondetails`);
};
