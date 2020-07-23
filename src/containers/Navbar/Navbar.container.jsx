import React from 'react';

import Logo from '../../assets/img/Logo.svg'

import * as Style from './Navbar.styles';
import { NavStyles, LogoContainer, MenuContainer, MenuToggle } from './Navbar.styles';
import { BsHouseDoorFill, BsCaretDownFill } from 'react-icons/bs';
import { MdLocationOn, MdEmail, MdGroup, MdMenu } from 'react-icons/md';
import { FaQuestion } from 'react-icons/fa';



function Navbar () {
    return(
        <NavStyles>

            <MenuToggle>
            <label><MdMenu /></label>
            </MenuToggle>

            <LogoContainer>
                <a href="#">
                    <img  src={Logo} ></img>
                </a>
            </LogoContainer>

            <MenuContainer>
                <nav>
                    <span><BsHouseDoorFill /></span>
                    <span><MdLocationOn /></span>
                    <span><BsCaretDownFill /></span>
                    <span><MdEmail /></span>
                    <span><MdGroup /></span>
                    <span><FaQuestion /></span>
                </nav> 

            </MenuContainer>



        </NavStyles>
    )
}

export default Navbar;