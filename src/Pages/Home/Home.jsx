import Header from "../../Components/Header/Header"
import { CardsContainer } from "./homeStyled"
import pokemons from "../../pokemon/pokemon.json"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"

const Home = () => {
    return (
        <>
            <Header />

            <CardsContainer>
                {pokemons.map((pokemon) =>{
                    return 
                    <PokemonCard cardColor={getColors(pokemon.type[0])} key={pokemon.id} pokemon={pokemon} />
                })}                
            </CardsContainer>

        </>
    )

}

export default Home