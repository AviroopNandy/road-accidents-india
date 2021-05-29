import React from "react";
import NavBar from "../NavBar/NavBar.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/images/df8/img1.PNG";
import img2 from "../../assets/images/df8/img2.PNG";
import img3 from "../../assets/images/df8/img3.PNG";
import img4 from "../../assets/images/df8/img4.PNG";
import img5 from "../../assets/images/df8/img5.PNG";

import "./DataFrame.style.css";

const DataFrame8 = () => {
    return(
        <div className="dataframe">
            <NavBar />
            <Container className="pt-3 pb-3">
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="pt-3 pb-3 image">
                            <Card.Img variant="top" src={ img1 } className="img" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="pt-3 pb-3 image">
                            <Card.Img variant="top" src={ img2 } className="img" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="pt-3 pb-3 image">
                            <Card.Img variant="top" src={ img3 } className="img" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="pt-3 pb-3 image">
                            <Card.Img variant="top" src={ img4 } className="img" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="pt-3 pb-3 image">
                            <Card.Img variant="top" src={ img5 } className="img" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DataFrame8;