import React from "react";
import NavBar from "../NavBar/NavBar.component";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/images/df1/img1.PNG";
import img2 from "../../assets/images/df1/img2.PNG";
import img3 from "../../assets/images/df1/img3.PNG";
import img4 from "../../assets/images/df1/img4.PNG";

import "./DataFrame.style.css";

const DataFrame1 = () => {
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
                                It is clearly visible that, the percentage of road accidents are almost 
                                <strong> constant </strong> during all years. It indicates that the 
                                government is making <strong>less </strong> efforts to prevent accidents 
                                by creating wider, better quality roads or creating new safety rules.
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
                                    This graph shows the <strong>mean accidents </strong> per 
                                    <strong> 1 lakh population </strong> for each year.
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
                                    From the above diagram, we can say that Maharashtra and Tamil Nadu have 
                                    the <strong>highest </strong> number of accidents. Furthur investigation 
                                    needs to be done to understand the case. Arunachal, Manipur, Meghalaya, 
                                    Mizoram, Nagaland and Tripura have the <strong>least </strong> number of 
                                    accidents. They all belong to the north-eastern area.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="pt-3 pb-3 d-flex flex-column align-items-center">
                        <Card className="pt-3 image">
                            <Card.Img variant="top" src={ img4 } className="img" />
                            <Card.Body>
                                <Card.Text>
                                    The above diagram shows the <strong>minimum </strong> and <strong>maximum </strong> 
                                    number of accidents per <strong>lakh population </strong> in <strong>4 years</strong>.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DataFrame1;