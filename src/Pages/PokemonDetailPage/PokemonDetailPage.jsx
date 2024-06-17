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

    const params = useParams();
    const pokemonName = params;

    const pokemon = allPokemons.filter((pokemonList) => pokemonList.name === pokemonName.name)

    useEffect(() => {
        getInfosPokemon()
    }, [])

    const getInfosPokemon = () => {
        axios.get(pokemon[0].url)
            .then((response) => {
                setPokemonDetails(response.data)
            })
            .catch((err) => {
                console.log(err.response)
            });
    }

    console.log(pokemonDetails)
    //https://mui.com/material-ui/react-table/

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
                                <TableRow>
                                    <TableCell align="center">Teste 1</TableCell>
                                    <TableCell align="center">Teste 2</TableCell>
                                    <TableCell align="center">Teste 3</TableCell>
                                </TableRow>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">HP</TableCell>
                                        <TableCell align="center">Attack</TableCell>
                                        <TableCell align="center">Defense</TableCell>
                                        <TableCell align="center">Sp. Atk</TableCell>
                                        <TableCell align="center">Sp. Def</TableCell>
                                        <TableCell align="center">Speed</TableCell>
                                        <TableCell align="center">Total</TableCell>
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