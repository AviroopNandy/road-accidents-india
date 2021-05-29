import React from "react";
import NavBar from "../NavBar/NavBar.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/images/df2/img1.PNG";
import img2 from "../../assets/images/df2/img2.PNG";
import img3 from "../../assets/images/df2/img3.PNG";

import "./DataFrame.style.css";

const DataFrame2 = () => {
    return(
        <div className="dataframe">
            <NavBar />
            <Container className="pt-3 pb-3">
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="image">
                            <Card.Img variant="top" src={ img1 } className="img" />
                            <Card.Body>
                                <Card.Text>
                                    This diagram shows the percentage of <strong>offenders </strong> 
                                    who died, according to <strong>gender</strong>.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="image">
                            <Card.Img variant="top" src={ img2 } className="img" />
                            <Card.Body>
                                <Card.Text>
                                    This diagram shows the percentage of <strong>victims </strong> 
                                    who died, according to <strong>gender</strong>.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="image">
                            <Card.Img variant="top" src={ img3 } className="img" />
                            <Card.Body>
                                <Card.Text>
                                    This diagram shows the percentage of <strong>offenders </strong> 
                                    and <strong>victims </strong>who died, according to <strong>gender</strong>.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DataFrame2;