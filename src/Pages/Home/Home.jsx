import Header from "../../Components/Header/Header"
//import { CardsContainer } from "./homeStyled"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"

const Home = ({allPokemons}) => {
    
    console.log(allPokemons);

   const render = () => {
        const result = allPokemons.map((pokemon, i) => {
        return <PokemonCard key={i} pokemon={pokemon} getAllPokemons={getAllPokemons} />
    }) 

    return result
  }

    return (
        <>
           <Header />
           <h1>Home</h1>  
           {render()}

        </>
    )

}

export default Home