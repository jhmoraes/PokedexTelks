import Header from "../../Components/Header/Header"
import { Container } from "./homeStyled"
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { getColors } from "../../utils/ReturnCardColor"

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
                    < PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} addToPokedex={addToPokedex} cardColor={getColors(pokemon.type[0].type.name)} />
                ))}
            </section>
        </Container>
    )

}

export default Home