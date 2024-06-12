import Header from "../../Components/Header/Header"
import { Container, Title } from "./homeStyled"
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard"

const Home = () => {

    const { allPokemons, pokedex, addToPokedex } = useContext(GlobalStateContext);

    const filteredPokeList = () =>
        allPokemons.filter((pokemonInList) =>
            !pokedex.find((pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name)
        );
    
        console.log(allPokemons)

    return (
        <Container>
            <Header />
            <Title>Todos os Pokémons</Title>
            <section>
                {filteredPokeList().map((pokemon) => (
                    < PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} addToPokedex={addToPokedex} />
                ))}
            </section>
        </Container>
    )

}

export default Home