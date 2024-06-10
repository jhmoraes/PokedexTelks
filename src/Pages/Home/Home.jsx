import Header from "../../Components/Header/Header"
import { Container } from "./homeStyled"
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard"

const Home = (props) => {

    const { allPokemons, pokedex, addToPokedex } = useContext(GlobalStateContext);

    const filteredPokeList = () =>
        allPokemons.filter((pokemonInList) =>
            !pokedex.find((pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name)
    );

    return (
        <Container>
           <Header />
           <h1>Todos os Pokémons</h1>  
           <section>
            {filteredPokeList().map((pokemon) => (
                <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} addToPokedex={addToPokedex} />
            ))}
           </section>
        </Container>
    )

}

export default Home