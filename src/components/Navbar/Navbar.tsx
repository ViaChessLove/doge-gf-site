import React, { useEffect, useState } from 'react'
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLogo, NavMenu } from './Navbar.style';
import {FaTimes} from 'react-icons/fa';
import {CgMenuRight} from 'react-icons/cg'

const Navbar = () => {
    const [show, setShow] = useState<boolean>(false);
    const handleShow = () => {
        setShow(!show);
    }
    const menu: string[] = ['About', 'How to buy', 'Roadmap', 'Tokenomics', 'Art', 'DogeGF Vaults', 'Faq'];
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo src="./assets/logo.png" alt="logo"/>
                <MobileIcon onClick={handleShow}>
                    {show? <FaTimes/>:<CgMenuRight/>}
                </MobileIcon>
                <NavMenu show={show}>
                    {menu.map((item, key) => {
                        return <NavItem key={key}>{item}</NavItem>
                    })}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
