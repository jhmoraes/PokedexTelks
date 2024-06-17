import Header from "../../Components/Header/Header"
import { Container, ImgLogo, Title, DetailsCard, BaseStats, ImgFront, ImgBack, NameCard, MoviesCard, ImageLarge, PokemonNumber, PokemonName, TypesContainer } from "./pokemonDetailPageStyled"
import logo from "../../assets/pngwing 2.png"
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import axios from "axios";
import { getTypes } from "../../utils/ReturnPokemonType.js"
import { getColors } from "../../utils/ReturnCardColor.js"
import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

const PokemonDetailPage = () => {

    const { allPokemons } = useContext(GlobalStateContext)
    const [pokemonDetails, setPokemonDetails] = useState([]);

    //Pega o nome do pokemon passado por URL
    const params = useParams();

    //Através da comparação do nome enviado com a lista de todos os pokemons, consegue-se o nome e a url dos dados do pokemon seleciionado.
    const pokemon = allPokemons.filter((pokemonList) => pokemonList.name === params.name);
    
    //Extrai-se apenas a url com todos os dados do pokemon.
    const urlPokemon = pokemon.map((url) => pokemon[0].url)

    useEffect(() => {
        getInfosPokemon()
    }, [])

    //Com o Axios, pega todas as informações do pokemon e as guarda dentro da variável estado (pokemonDetails).
    const getInfosPokemon = () => {
        axios.get(urlPokemon)
            .then((response) => {
                setPokemonDetails(response.data)
            })
            .catch((err) => {
                console.log(err.response)
            });
    } 

    console.log(pokemonDetails.stats)

    const total = pokemonDetails.map((value) => (value.base_stat + total))
    console.log(total)

    return (
        <>
            <Header />
            <Container>
                <ImgLogo src={logo} />
                <Title>Detalhes</Title>
                <DetailsCard color={getColors(pokemonDetails.types && pokemonDetails.types[0].type.name)}>
                    <ImgFront src={pokemonDetails.sprites?.front_default} />
                    <ImgBack src={pokemonDetails.sprites?.back_default} />
                    <BaseStats>
                        <b>Base Stat</b>
                        <TableContainer>
                            <Table sx={{ ninWidth: 650 }} arial-label="simple table">
                                <TableBody>
                                   <TableRow>
                                        <TableCell align="right">HP</TableCell>
                                        <TableCell align="right">{pokemonDetails.stats && pokemonDetails.stats[0].base_stat}</TableCell>
                                        <TableCell align="left>"></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">Attack</TableCell>
                                        <TableCell align="right">{pokemonDetails.stats && pokemonDetails.stats[1].base_stat}</TableCell>
                                        <TableCell align="left>"></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">Defense</TableCell>
                                        <TableCell align="right">{pokemonDetails.stats && pokemonDetails.stats[2].base_stat}</TableCell>
                                        <TableCell align="left>"></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">Sp. Atk</TableCell>
                                        <TableCell align="right">{pokemonDetails.stats && pokemonDetails.stats[3].base_stat}</TableCell>
                                        <TableCell align="left>"></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">Sp. Def</TableCell>
                                        <TableCell align="right">{pokemonDetails.stats && pokemonDetails.stats[4].base_stat}</TableCell>
                                        <TableCell align="left>"></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">Speed</TableCell>
                                        <TableCell align="right">{pokemonDetails.stats && pokemonDetails.stats[5].base_stat}</TableCell>
                                        <TableCell align="left>"></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">Total</TableCell>
                                        <TableCell align="right">{
                                                
                                            }</TableCell>
                                        <TableCell align="left>"></TableCell>  
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </BaseStats>
                    <NameCard>
                        <div>
                            <PokemonNumber>{pokemonDetails.id}</PokemonNumber>
                            <PokemonName>{pokemonDetails.name}</PokemonName>
                            <TypesContainer>
                                {pokemonDetails.types && <img src={getTypes(pokemonDetails.types && pokemonDetails.types[0].type.name)} />}
                                {pokemonDetails.types && <img src={getTypes(pokemonDetails.types && pokemonDetails.types[1] && pokemonDetails.types[1].type.name)} />}
                            </TypesContainer>
                        </div>
                    </NameCard>
                    <MoviesCard>
                        <div>

                        </div>
                    </MoviesCard>
                    <div>
                        <ImageLarge src={pokemonDetails.sprites?.front_default} />
                    </div>
                </DetailsCard >
            </Container>
        </>
    )
}

export default PokemonDetailPage