import React, { useEffect } from 'react';
import logo from '../../assets/logo.png';
import { ContainerHeader } from './headerStyled'
import { useLocation, useNavigate } from 'react-router';
import { goToPokemonList, goToHomePage } from '../../Routes/coordinator'
import { useParams } from 'react-router-dom';
import { Button, Link } from '@mui/material';

const Header = (props) => {

    const location = useLocation();
    const navigate = useNavigate();
    const { removeFromPokedex } = props;
    const name = useParams();

    const renderHeader = () => {
        switch (location.pathname) {
            case "/":
                return (
                    <>
                        <Link color="inherit"></Link>
                        <img src={logo} />
                        <Button variant="contained" size="large" onClick={() => goToPokemonList(navigate)}>Pokédex</Button>
                    </>
                );
            case "/pokemonlist":
                return (
                    <>
                        <Link color="inherit" onClick={() => goToHomePage(navigate)}>Todos Pokémons</Link>
                        <img src={logo} />
                        <Link color="inherit">      </Link>
                    </>
                );
            case `/pokemondetails/${name.name}`:
                return (
                    <>
                        <Link color="inherit" onClick={() => goToHomePage(navigate)}>Todos Pokémons</Link>
                        <img src={logo} />
                        <Button variant="contained" size="large" background="#ff6262" onClick={() => removeFromPokedex(name.name)}>Excluir da Pokédex</Button>
                    </>
                );
            default:
                return (
                    <>
                        <img src={logo} />
                        <Button variant="contained" size="large" onClick={() => goToPokemonList(navigate)}>Pokédex</Button>
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
