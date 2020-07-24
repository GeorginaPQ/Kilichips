import React from 'react';

import Logo from '../../assets/img/Logo.svg'

import * as Style from './Navbar.styles';
import { NavStyles, LogoContainer, MenuContainer, MenuToggle, Login } from './Navbar.styles';
import { BsHouseDoorFill, BsCaretDownFill } from 'react-icons/bs';
import { MdLocationOn, MdEmail, MdGroup, MdMenu, MdShoppingCart } from 'react-icons/md';
import { FaQuestion } from 'react-icons/fa';



function Navbar () {
    return(
        <NavStyles>
                <MenuToggle>
                    <button><MdMenu /></button>
                </MenuToggle>
                <LogoContainer>
                    <a href="#">
                        <img  src={Logo} ></img>
                    </a>
                </LogoContainer>
            <MenuContainer>
                <nav>
                    <div><span><BsHouseDoorFill /></span>Inicio</div>
                    <div><span><MdLocationOn /></span>Puntos de venta</div>
                    <div>Tienda<span><BsCaretDownFill /></span></div>
                    <div><span><MdEmail /></span>Contacto</div>
                    <div><span><MdGroup /></span>Quienes somos</div>
                    <div><span><FaQuestion /></span>Pregutas frecuentes</div>
                </nav> 
            </MenuContainer>
            <Login>
                <div>Tu cuenta<span><BsCaretDownFill/></span></div>|
                <span><MdShoppingCart /></span>
            </Login>
        </NavStyles>
    )
}

export default Navbar;