import React from 'react';
import logo from '../../assets/logo.png';
import { ContainerHeader } from './headerStyled'


const Header = () => {
    return (
        <ContainerHeader>
            <button>botao</button>
            <img src={logo}></img>
            <button>Pokedex</button>
        </ContainerHeader>
    )


};

export default Header;
