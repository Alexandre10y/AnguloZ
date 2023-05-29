import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Logo from '../../Images/Logo.png';
import { useLocation } from 'react-router-dom';
import './style.css'
function Header() {
    const pathname = useLocation().pathname;
    const HeaderClass = pathname === '/Home' || pathname === "/" ? 'colorHeader fixed-top' : 'bg-fundo';
    return (
        <Navbar className={HeaderClass} collapseOnSelect expand="lg">
            <Container className=''>
                <Navbar.Brand href="/Home"><img className='logo' src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className='fonte'>
                        <Nav.Link className='corfonte' href="/legado">Legado</Nav.Link>
                        <Nav.Link href="/projetos">Projetos</Nav.Link>
                        <Nav.Link href="/contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;