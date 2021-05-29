import React from "react";
import NavBar from "../NavBar/NavBar.component";
import ListGroup from "react-bootstrap/ListGroup";

import "./Devs.style.css";

const Devs = () => {
    return(
        <div className="devs">
            <NavBar />
            <ListGroup className="d-flex justify-content-center align-items-center list-group">
                <ListGroup.Item className="item">Aviroop Nandy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19BCE0246</ListGroup.Item>
                <ListGroup.Item className="item">Devayani M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19BCE0452</ListGroup.Item>
                <ListGroup.Item className="item">Anuvab Dutta&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19BCE0603</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Devs;