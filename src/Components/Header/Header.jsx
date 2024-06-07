import React from 'react';
import logo from '../../assets/logo.png';
import { ContainerHeader } from './headerStyled'
import { useLocation, useNavigate } from 'react-router';


const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const renderHeader = () => {
        /* 
        switch (location.pathname){
            case "/":
                return (
                    <>
                        <img>{logo}</img>
                        <button onClick={() => goToPokemonList(navigate)}>Pokédex</button>
                    </>
                );
            case "/pokemondetail":
                return (
                    <>
                        <a onClick={() => goToHomePage(navigate) }>Todos Pokémons</a>
                        <img>{logo}</img>
                    </>
                );
            case "/pokemondetail":
                return (
                    <>
                        <a onClick={() => goToHomePage(navigate) }>Todos Pokémons</a>
                        <img>{logo}</img>
                        <button>Excluir da Pokédex</button>
                    </>
                );
            default:
                return (
                    <>
                        <button onClick={() => goToHomePage(navigate)}>
                            Voltar para página inicial
                        </button>
                        <img>{logo}</img>
                    </>
                );
        }*/
    } 

    return (
        <ContainerHeader>
            {renderHeader()}
        </ContainerHeader>
    )
};

export default Header;
