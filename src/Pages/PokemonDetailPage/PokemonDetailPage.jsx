import Header from "../../Components/Header/Header"
import { Container, ImgLogo, Title, DetailsCard, BaseStats, ImgFront, ImgBack, NameCard, MoviesCard, ImageLarge } from "./pokemonDetailPageStyled"
import logo from "../../assets/pngwing 2.png"
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import axios from "axios";

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

    return (
        <>
            <Header />
            <Container>
                <ImgLogo src={logo} />
                <Title>Detalhes</Title>
                <DetailsCard >
                    <ImgFront>
                        <img src={pokemonDetails.sprites?.front_default} />
                    </ImgFront>
                    <ImgBack>
                        <img src={pokemonDetails.sprites?.
                            back_default} />
                    </ImgBack>
                    <BaseStats>
                        Base Stat
                    </BaseStats>
                    <NameCard>
                        Card com #ID, Nome e Tipo
                    </NameCard>
                    <MoviesCard>
                        Relação dos Movimentos do Pokemon
                    </MoviesCard>
                    <ImageLarge>
                        Imagem grande do Pokemon
                    </ImageLarge>
                </DetailsCard >
            </Container>
        </>
    )
}

export default PokemonDetailPage