import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import MafiaLogo from '../mafia-logo.png';
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Login from "../auth/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Signup from "../auth/Signup";
import Rules from "./Rules";
import Leaderboard from "./Leaderboard";
import AuthenticatedRoute from "../auth/AuthenticatedRoute";

function Welcome(props) {
    return (
        <div>
            <Container style={{paddingTop : '3em'}}>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Body style={{textAlign : 'center'}}>
                                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}><h1>Mafia Online!</h1></Link>
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
                            <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}><Card.Img src = {MafiaLogo} /></Link>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Route exact path={`${props.match.url}login`} component={Login} />
                        <Route exact path={`${props.match.url}signup`} component={Signup}/>
                        <Route exact path={`${props.match.url}rules`} component={Rules}/>
                        <Route exact path={`${props.match.url}leaderboard`} component={Leaderboard}/>
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