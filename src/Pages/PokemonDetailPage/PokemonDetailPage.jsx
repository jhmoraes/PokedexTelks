import Header from "../../Components/Header/Header"
import { Container, ImgLogo, Title, DetailsCard, BaseStats, ImgFront, ImgBack, NameCard, MoviesCard, ImageLarge } from "./pokemonDetailPageStyled"
import logo from "../../assets/pngwing 2.png"
import { useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

const PokemonDetailPage = () => {

    const {allPokemons} = useContext(GlobalStateContext)

    const params = useParams();
    const pokemonName = params;

    const pokemon = allPokemons.filter((pokemonList) => pokemonList.name === pokemonName.name)

    console.log(pokemon)


    


    return (
        <>
            <Header />
            <Container>
                <ImgLogo src={logo}/>
                <Title>Detalhes</Title>
                <DetailsCard >
                    <ImgFront>
                      Front Imagem
                    </ImgFront>
                    <ImgBack>
                        Back Imagem
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