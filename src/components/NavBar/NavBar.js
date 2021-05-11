import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-md  navbar-light bg-light justify-content-between">
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
                    </ul>
                </div>
                </nav>
        </>
    )
}

export default NavBar;