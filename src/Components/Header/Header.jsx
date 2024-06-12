import React from 'react';
import logo from '../../assets/logo.png';
import { ContainerHeader } from './headerStyled'
import { useLocation, useNavigate } from 'react-router';
import { goToPokemonList, goToHomePage } from '../../Routes/coordinator'
import Button from '@mui/material/Button';


const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const renderHeader = () => {
        switch (location.pathname){
            case "/":
                return (
                    <>
                        <img src={logo} />
                        <Button variant="contained" size="large" onClick={() => goToPokemonList(navigate)}>Pokédex</Button>
                    </>
                );
            case "/pokemonlist":
                return (
                    <>
                        <a onClick={() => goToHomePage(navigate) }>Todos Pokémons</a>
                        <img src={logo} />
                    </>
                );
            case "/pokemondetails#{id}":
                return (
                    <>
                        <a onClick={() => goToHomePage(navigate) }>Todos Pokémons</a>
                        <img src={logo} />
                        <Button variant="contained" size="large">Excluir da Pokédex</Button>
                    </>
                );
            default:
                return (
                    <>
                        <img src={logo} />
                        <Button variant="contained" size="large" onClick={() => goToPokemonList(navigate)}>Pokédex</Button>;
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
