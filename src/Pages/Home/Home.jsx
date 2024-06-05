import Header from "../../Components/Header/Header"
import { Container } from "./homeStyled"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"

const Home = () => {
    
    const render = () => {
        const result = allPokemons.map((pokemon, i) => {
        return <PokemonCard key={i} pokemon={pokemon} getAllPokemons={getAllPokemons} />
    }) 

    return result
  }

    return (
        <Container>
           <Header />
           <h1>Home</h1>  
           {render()}

        </Container>
    )

}

export default Home