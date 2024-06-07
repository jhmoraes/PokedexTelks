import GlobalStateContext from "../../global/GlobalStateContext"
import { useContext } from "react"
import {Container,PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, CatchButton, Pokemon} from './pokemonCardStyled'
import pokeball from "../../assets/pngwing 2.png"

const PokemonCard = () =>{

    const {allPokemons} = useContext(GlobalStateContext);
    console.log(allPokemons)
    

    return(
        <>


        </>
    )

}

export default PokemonCard