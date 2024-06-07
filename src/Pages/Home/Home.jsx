import Header from "../../Components/Header/Header"
import { Container } from "./homeStyled"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

const Home = () => {

    const {allPokemons} = useContext(GlobalStateContext);

    const render = () => {
        const result = allPokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} />
        })  

        return result
    }

    return (
        <Container>
           <Header />
           <h1>Todos os Pokémons</h1>  
           {render()}

        </Container>
    )

}

export default Home