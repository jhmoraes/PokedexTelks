import { useContext } from "react"
import Header from "../../Components/Header/Header"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Container, Title } from "./pokemonsListPageStyled"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { BASE_URL } from "../../constant/BASE_URL"

const PokemonListPage = () => {

    const { pokedex } = useContext(GlobalStateContext)

    return (
        <Container>
            <Header />
            <Title>Meus Pokémons</Title>
            <section>
                {pokedex.map((pokemon) => (
                    <PokemonCard key={`${BASE_URL}/${pokemon.id}`} pokemonUrl={`${BASE_URL}/${pokemon.id}`} />
                ))}
            </section>
        </Container>
    )
}

export default PokemonListPage