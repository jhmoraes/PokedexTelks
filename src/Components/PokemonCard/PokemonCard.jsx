import { useEffect, useState } from "react"
import { Container, PokemonName, PokemonNumber } from './pokemonCardStyled'
import { useLocation, useNavigate } from "react-router"
import axios from "axios"
import { goToPokemonDetail } from "../../Routes/coordinator.js"

const PokemonCard = (props) => {

    const { cardColor, pokemonUrl, addToPokedex, removeFromPokedex } = props;

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

    console.log(pokemon)

    return (
        <Container color={cardColor}>
            <PokemonNumber>{pokemon.id}</PokemonNumber>
            <PokemonName>{pokemon.name}</PokemonName>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <div>
                {location.pathname === "/" ? (
                    <button onClick={() => addToPokedex(pokemon)}>
                        Adcionar à Pokedex
                    </button>
                ) : (
                    <button onClick={() => removeFromPokedex(pokemon)}>
                        Remover da Pokedex
                    </button>
                )}

                <button onClick={() => goToPokemonDetail(navigate, pokemon.name)}>
                    Ver detalhes
                </button>
            </div>
        </Container>
    )

}

export default PokemonCard