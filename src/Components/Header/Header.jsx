import React from 'react';
import logo from '../../assets/logo.png';
import { ContainerHeader } from './headerStyled'
import { useLocation, useNavigate } from 'react-router';
import { goToPokemonList, goToHomePage } from '../../Routes/coordinator'
import { useParams } from 'react-router-dom';
import { Button, Link } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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
                        <img src={logo} alt="Logo Pokemon"/>
                        <Button variant="contained" onClick={() => goToPokemonList(navigate)}>Pokédex</Button>
                    </>
                );
            case "/pokemonlist":
                return (
                    <>
                        <Link color="inherit" onClick={() => goToHomePage(navigate)}>Todos Pokémons</Link>
                        <img src={logo} alt="Logo Pokemon"/>
                        <Link color="inherit">      </Link>
                    </>
                );
            case `/pokemondetails/${name.name}`:
                return (
                    <>
                        <Link color="inherit" onClick={() => goToHomePage(navigate)}>Todos Pokémons</Link>
                        <img src={logo} alt="Logo Pokemon"/>
                        <Button variant="contained" color="error" onClick={() => removeFromPokedex(name.name)}>Excluir da Pokédex</Button>
                    </>
                );
            default:
                return (
                    <>
                        <img src={logo} alt="Logo Pokemon"/>
                        <Button variant="contained" onClick={() => goToPokemonList(navigate)}>Pokédex</Button>
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
