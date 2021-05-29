import React from "react";
import NavBar from "../NavBar/NavBar.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/images/df5/img1.PNG";
import img2 from "../../assets/images/df5/img2.PNG";
import img3 from "../../assets/images/df5/img3.PNG";
import img4 from "../../assets/images/df5/img4.PNG";
import img5 from "../../assets/images/df5/img5.PNG";
import img6 from "../../assets/images/df5/img6.PNG";
import img7 from "../../assets/images/df5/img7.PNG";
import img8 from "../../assets/images/df5/img8.PNG";
import img9 from "../../assets/images/df5/img9.PNG";
import img10 from "../../assets/images/df5/img10.PNG";

import "./DataFrame.style.css";

const DataFrame5 = () => {
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
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="pt-3 pb-3 image">
                            <Card.Img variant="top" src={ img6 } className="img" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="pt-3 pb-3 image">
                            <Card.Img variant="top" src={ img7 } className="img" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="pt-3 pb-3 image">
                            <Card.Img variant="top" src={ img8 } className="img" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="pt-3 pb-3 image">
                            <Card.Img variant="top" src={ img9 } className="img" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="pt-3 pb-3 image">
                            <Card.Img variant="top" src={ img10 } className="img" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DataFrame5;