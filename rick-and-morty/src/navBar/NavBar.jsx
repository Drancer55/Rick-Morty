import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RxRocket } from "react-icons/rx";
import logo from '../assets/Backgrounds/Rick-And-Morty-Logo.png'
import './navbar.css';
    
const NavBar = ({data}) => {
// Barra de navegación 
    return (
        <Navbar
            variant="dark"
            expanded="lg"
            bg="dark"
            sticky="top"
            expand="lg"
        >
            <Container fluid>
                <Navbar.Brand href="#" className="navBrand">
                    <RxRocket />
                    <img src={logo} className='logo' />
                    <RxRocket />
                </Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;