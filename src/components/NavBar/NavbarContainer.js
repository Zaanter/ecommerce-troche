import React from 'react'
import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget'
import { Navbar, Nav } from 'react-bootstrap'

const NavbarContainer = () => {
    return(
        <>
            <Navbar bg="light" expand="lg" className='justify-content-between'>
                <Navbar.Brand href="#">Ecommerce Troche</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className={'ms-auto'}
                    style={{ maxHeight: '100px'}}
                    
                    >
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Catálogo</Nav.Link>
                    <Nav.Link href="#">Marcas</Nav.Link>
                    <Nav.Link href="#">Perfil</Nav.Link>

                    <Nav.Link href="#">
                        <CartWidget></CartWidget>
                    </Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarContainer;
