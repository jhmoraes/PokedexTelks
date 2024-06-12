import { useEffect, useState } from "react"
import { Container, PokemonName, PokemonNumber, CatchButton, TypesContainer, Pokeball, Pokemon } from './pokemonCardStyled'
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

    return (
        <Container color={getColors(pokemon.types && pokemon.types[0].type.name)}>
            <div>
                <PokemonNumber>{pokemon.id}</PokemonNumber>
                <PokemonName>{pokemon.name}</PokemonName>
                <TypesContainer>
                    {pokemon.types && <img src={getTypes(pokemon.types && pokemon.types[0].type.name)} />}
                    {pokemon.types && <img src={getTypes(pokemon.types && pokemon.types[1] && pokemon.types[1].type.name)} />}
                </TypesContainer>
                <a onClick={() => goToPokemonDetail(navigate, pokemon.id)}>
                    Ver detalhes
                </a>
            </div>
            <div>
                <Pokemon src={pokemon.sprites?.front_default} alt={pokemon.name} />
                <CatchButton>
                    {location.pathname === "/" ? (
                        <text onClick={() => addToPokedex(pokemon)}>
                            Adcionar à Pokedex
                        </text>
                    ) : (
                        <text onClick={() => removeFromPokedex(pokemon)}>
                            Remover da Pokedex
                        </text>
                    )}
                </CatchButton>
            </div>
            <Pokeball src={pokeball} alt="pokeball" />
        </Container>
    )
}

export default PokemonCard