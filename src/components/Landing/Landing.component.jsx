import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar.component";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Landing.style.css";

const Landing = () => {
    return(
        <div className="landing">
            <NavBar />
            <h3>Development of Visual Idioms to understand the Road Accidents in India</h3>
            <Container>
                <Row className="pt-5 pb-5 d-flex justity-content-center">
                    <Col className="d-flex flex-column">
                        <Card>
                            <Card.Body>
                                <Card.Title style={ {textAlign: "center"} }>Data Frame 1</Card.Title>
                                <Card.Text>Data Frame 1: Analysing Accidents per Lakh Population per State per Year</Card.Text>
                                <Link to="/dataframe-1">
                                    <div style= { {textAlign: "center"} }>
                                        <Button>Click to view</Button>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex flex-column">
                        <Card>
                            <Card.Body>
                                <Card.Title style={ {textAlign: "center"} }>Data Frame 2</Card.Title>
                                <Card.Text>Data Frame 2: Analysing Offender and Victim Deaths per Gender, State</Card.Text>
                                <Link to="/dataframe-2">
                                    <div style= { {textAlign: "center"} }>
                                        <Button>Click to view</Button>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="pb-5 d-flex justity-content-center">
                    <Col className="d-flex flex-column">
                        <Card>
                            <Card.Body>
                                <Card.Title style={ {textAlign: "center"} }>Data Frame 3</Card.Title>
                                <Card.Text>Data Frame 3: Analysing Deaths due to improper use of Safety Accessories</Card.Text>
                                <Link to="/dataframe-3">
                                    <div style= { {textAlign: "center"} }>
                                        <Button>Click to view</Button>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex flex-column">
                        <Card>
                            <Card.Body>
                                <Card.Title style={ {textAlign: "center"} }>Data Frame 4</Card.Title>
                                <Card.Text>Data Frame 4: Analysing rate of accidents from the year 2003 to 2016 for each state</Card.Text>
                                <Link to="/dataframe-4">
                                    <div style= { {textAlign: "center"} }>
                                        <Button>Click to view</Button>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="pb-5 d-flex justity-content-center">
                    <Col className="d-flex flex-column">
                        <Card>
                            <Card.Body>
                                <Card.Title style={ {textAlign: "center"} }>Data Frame 5</Card.Title>
                                <Card.Text>Data Frame 5: Analysing accidents/injuries/deaths occuring as per number of lanes</Card.Text>
                                <Link to="/dataframe-5">
                                    <div style= { {textAlign: "center"} }>
                                        <Button>Click to view</Button>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex flex-column">
                        <Card>
                            <Card.Body>
                                <Card.Title style={ {textAlign: "center"} }>Data Frame 6</Card.Title>
                                <Card.Text>Data Frame 6: Analysing accidents/injuries/deaths occuring due to various faults/reasons</Card.Text>
                                <Link to="/dataframe-6">
                                    <div style= { {textAlign: "center"} }>
                                        <Button>Click to view</Button>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="pb-5 d-flex justity-content-center">
                    <Col className="d-flex flex-column">
                        <Card>
                            <Card.Body>
                                <Card.Title style={ {textAlign: "center"} }>Data Frame 7</Card.Title>
                                <Card.Text>Data Frame 7: Analysing accidents/injuries/deaths as per the types of vehicles on road</Card.Text>
                                <Link to="/dataframe-7">
                                    <div style= { {textAlign: "center"} }>
                                        <Button>Click to view</Button>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex flex-column">
                        <Card>
                            <Card.Body>
                                <Card.Title style={ {textAlign: "center"} }>Data Frame 8</Card.Title>
                                <Card.Text>Data Frame 8: Analysing number of accidents which take place as per time of occurence</Card.Text>
                                <Link to="/dataframe-8">
                                    <div style= { {textAlign: "center"} }>
                                        <Button>Click to view</Button>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Landing;