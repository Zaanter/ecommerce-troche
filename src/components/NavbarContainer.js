import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

import CartWidget from './cartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import React from 'react'

const NavbarContainer = ({categorias}) => {
    return(
        <>
            <Navbar bg="light" expand="lg" style={{paddingRight:20, paddingLeft:20, paddingTop:10, paddingBottom:10, height:'10vh'}} className='justify-content-between'>
                <Navbar.Brand><NavLink style={{color:'black', textDecoration:'none'}} to='/'>Ecommerce Troche</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className={'ms-auto'} style={{ maxHeight: '100px'}}>
                        
                        <Nav.Link><NavLink to='/' exact activeStyle={{color:'orange'}} style={{color:'black', textDecoration:'none'}}>Home</NavLink></Nav.Link>

                        <NavDropdown title={<span style={{color:'black'}}>Categorias</span>} id="basic-nav-dropdown" >
                            {
                                categorias && categorias.map((cat) => {
                                    return (
                                        <NavDropdown.Item>
                                            <NavLink to={`/category/${cat.id}`} activeStyle={{color:'orange'}} style={{color:'black', textDecoration:'none'}}>{cat.nombre}</NavLink>
                                        </NavDropdown.Item>
                                    )
                                })
                            }
                        </NavDropdown>

                        <Nav.Link><NavLink to='/perfil' activeStyle={{color:'orange'}} style={{color:'black', textDecoration:'none'}}>Perfil</NavLink></Nav.Link>


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
