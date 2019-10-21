import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import MafiaLogo from '../mafia-logo.png';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Login from "./Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Signup from "./Signup";
import Rules from "./Rules";
import Leaderboard from "./Leaderboard";

function Welcome() {
    return (
        <div>
            <Container style={{paddingTop : '3em'}}>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body style={{textAlign : 'center'}}>
                                <h1>Mafia Online!</h1>
                                <h4>The famous mafia game is now online</h4>
                            </Card.Body>
                            <Card.Subtitle>

                            </Card.Subtitle>
                        </Card>
                    </Col>
                </Row>
                <Row style={{paddingTop : '3em'}}>
                    <Col md={3}>
                        <Card>
                            <Card.Img src = {MafiaLogo} />
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Route path={'/login'} component={Login} />
                        <Route path={'/signup'} component={Signup}/>
                        <Route path={'/rules'} component={Rules}/>
                        <Route path={'/leaderboard'} component={Leaderboard}/>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <Container>
                                    <Row style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Col md={12} ><Link to={'/login'} >
                                        <Button style={{width : '100%'}} variant="dark">
                                            <FontAwesomeIcon icon="user" /> Login
                                        </Button></Link>
                                        </Col>
                                    </Row>
                                    <Row style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: '1em'
                                    }}>
                                        <Col md={12} ><Link to={'/signup'} >
                                            <Button style={{width : '100%'}} variant="dark">
                                                <FontAwesomeIcon icon="clipboard" /> Signup
                                            </Button></Link>
                                        </Col>
                                    </Row>
                                    <Row style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: '1em'
                                    }}>
                                        <Col md={12} ><Link to={'/rules'} >
                                            <Button style={{width : '100%'}} variant="dark">
                                                <FontAwesomeIcon icon="list" /> Rules
                                            </Button></Link>
                                        </Col>
                                    </Row>
                                    <Row style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        paddingTop: '1em'
                                    }}>
                                        <Col md={12} ><Link to={'/leaderboard'} >
                                            <Button style={{width : '100%'}} variant="dark">
                                                <FontAwesomeIcon icon="trophy" /> Leaderboard
                                            </Button></Link>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Welcome