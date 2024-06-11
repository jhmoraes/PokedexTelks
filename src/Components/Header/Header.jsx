import React from 'react';
import logo from '../../assets/logo.png';
import { ContainerHeader } from './headerStyled'
import { useLocation, useNavigate } from 'react-router';
import { goToPokemonList, goToHomePage } from '../../Routes/coordinator'


const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const renderHeader = () => {
        switch (location.pathname){
            case "/":
                return (
                    <>
                        <img src={logo} />
                        <button onClick={() => goToPokemonList(navigate)}>Pokédex</button>
                    </>
                );
            case "/pokemondetail":
                return (
                    <>
                        <a onClick={() => goToHomePage(navigate) }>Todos Pokémons</a>
                        <img src={logo} />
                    </>
                );
            case "/pokemondetail":
                return (
                    <>
                        <a onClick={() => goToHomePage(navigate) }>Todos Pokémons</a>
                        <img src={logo} />
                        <button>Excluir da Pokédex</button>
                    </>
                );
            default:
                return (
                    <>
                        <button onClick={() => goToHomePage(navigate)}>
                            Voltar para página inicial
                        </button>
                        <img src={logo} />
                    </>
                );
        }
    } 

    return (
        <ContainerHeader>
            {renderHeader()}
        </ContainerHeader>
    )
};

export default Header;
