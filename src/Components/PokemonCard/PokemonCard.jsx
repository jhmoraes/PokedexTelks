import { useEffect, useState } from "react"
import { Container, PokemonName, PokemonNumber, CatchButton, TypesContainer, Pokeball } from './pokemonCardStyled'
import { useLocation, useNavigate } from "react-router"
import axios from "axios"
import { goToPokemonDetail } from "../../Routes/coordinator.js"
import { getTypes } from "../../utils/ReturnPokemonType.js"
import { getColors } from "../../utils/ReturnCardColor.js"
import pokeball from "../../assets/pngwing 2.png";

const PokemonCard = (props) => {

    const { pokemonUrl, addToPokedex, removeFromPokedex } = props;

    // hook para saber nosso pathe atual
    const location = useLocation();

    // hook para redirecionar
    const navigate = useNavigate();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = () => {
        axios.get(pokemonUrl)
            .then((response) => {
                //caso de sucesso
                setPokemon(response.data);
            })
            .catch((error) => {
                //caso de erro
                console.log(error.response);
            });
    };

    console.log(pokemon.types&&pokemon.types)
  
    return (
        <Container color={getColors(pokemon.types&&pokemon.types[0].type.name)}>
            <PokemonNumber>#{pokemon.id}</PokemonNumber>
            <PokemonName>{pokemon.name}</PokemonName>
            <TypesContainer>

            </TypesContainer>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <CatchButton>
                {location.pathname === "/" ? (
                    <button onClick={() => addToPokedex(pokemon)}>
                        Adcionar à Pokedex
                    </button>
                ) : (
                    <button onClick={() => removeFromPokedex(pokemon)}>
                        Remover da Pokedex
                    </button>
                )}
            </CatchButton>
            <button onClick={() => goToPokemonDetail(navigate, pokemon.name)}>
                    Ver detalhes
            </button>
           <Pokeball src={pokeball} alt="pokeball" />
        </Container>
    )
}

export default PokemonCard