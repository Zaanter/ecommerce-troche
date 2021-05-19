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

<Navbar className="navbar navbar-expand-lg  navbar-light bg-light justify-content-between">
<a className="navbar-brand" href="#">Ecommerce Troche</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="navbar" id="navbarNavDropdown">
    <ul className="navbar-nav">
    <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Catálogo</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Marcas</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Perfil</a>
    </li>
    <li className="nav-item">
        <CartWidget></CartWidget>
    </li>
    </ul>
</div>
</Navbar>
