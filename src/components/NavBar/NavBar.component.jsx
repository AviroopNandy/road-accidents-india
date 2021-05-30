import React from "react";
import  { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./NavBar.style.css";

const NavBar = () => {
    const history = useHistory();

    const redirectToHome = () => {
        history.push("/");
    }

    const redirectToDevs = () => {
        history.push("/devs");
    }

    return(
        <>
            <Navbar fixed="top" variant="primary" className="navbar-custom">
                <Navbar.Brand href="/" className="navbar-logo">
                    🚗 Road Accidents in India 🚌
                </Navbar.Brand>
                <Nav className="ml-auto">
                <Nav.Link href="#" className="nav-link-text" onClick={ () => redirectToHome() }>🏡 Home</Nav.Link>
                <Nav.Link href="#" className="nav-link-text" onClick={ () => redirectToDevs() }>👨‍💻 Devs</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default NavBar;