import React, { useEffect, useState } from 'react'
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLogo, NavMenu } from './Navbar.style';
import {FaTimes} from 'react-icons/fa';
import {CgMenuRight} from 'react-icons/cg'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [show, setShow] = useState<boolean>(false);
    const handleShow = () => {
        setShow(!show);
    }
    const menu: string[] = ['About', 'How to buy', 'Roadmap', 'Tokenomics', 'Blog', 'Art', 'DogeGF Vaults', 'Faq'];
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo src="./assets/logo.png" alt="logo"/>
                <MobileIcon onClick={handleShow}>
                    {show? <FaTimes/>:<CgMenuRight/>}
                </MobileIcon>
                <NavMenu show={show}>
                    {menu.map((item, key) => {
                        return <Link spy={true} smooth={true} offset={20} duration={300} to={item.split(' ').join('').toLowerCase()}><NavItem onClick={handleShow} key={key}>{item}</NavItem></Link>
                    })}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
