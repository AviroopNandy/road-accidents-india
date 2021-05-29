import React from "react";
import NavBar from "../NavBar/NavBar.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/images/df3/img1.PNG";

import "./DataFrame.style.css";

const DataFrame3 = () => {
    return(
        <div className="dataframe">
            <NavBar />
            <Container className="pt-3 pb-3">
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="pt-3 image">
                            <Card.Img variant="top" src={ img1 } className="img" />
                            <Card.Body>
                                <Card.Text>
                                    This chart shows the percentage of deaths occuring due to 
                                    <strong> non-wearing of helmets </strong> between 
                                    <strong> male </strong> and <strong>female </strong> drivers.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DataFrame3;