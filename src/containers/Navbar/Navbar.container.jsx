import React from 'react';

import Logo from '../../assets/img/Logo.svg'

import * as Style from './Navbar.styles';
import { NavStyles, LogoContainer } from './Navbar.styles'

function Navbar () {
    return(
        <NavStyles>

            
            <LogoContainer>
                <a href="#">
                    <img  src={Logo} ></img>
                </a>

            </LogoContainer>


        </NavStyles>
    )
}

export default Navbar;