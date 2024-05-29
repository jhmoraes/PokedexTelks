import React from 'react';
import logo from '../../assets/logo.png';
import { Container } from './headerStyled'



const Header = () => {
    return (
        <>
            <img src={logo}></img>
            <button>Pokèdex</button>
        </>
    )


};

export default Header;
