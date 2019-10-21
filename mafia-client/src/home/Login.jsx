import React from 'react'
import Card from "react-bootstrap/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GoogleLogin from "react-google-login";

function Login() {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Container>
                        <Row style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: '1em'
                        }}>
                            <h4><FontAwesomeIcon icon="user" /> Login</h4>
                        </Row>
                        <Row style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: '1em'
                        }}>
                            <Form style={{width: '75%'}}>
                                <Col md={12}><FormControl type="email" placeholder="Email"/></Col>
                                <Col><FormControl type="password" placeholder="Password" style={{marginTop: '0.5em'}}/></Col>
                                <Col style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '1.5em'
                                }}>
                                    <Button variant="dark" type="submit" style={{marginRight: '10px'}}> Login </Button> or <Button variant="light" style={{marginLeft: '10px'}}> Signup </Button>
                                </Col>
                            </Form>
                        </Row>
                        <Row style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: '1em'
                        }}>
                            ------- or ------- <br/>
                        </Row>
                        <Row style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: '1em'
                        }}>
                            <div>
                                <GoogleLogin onSuccess={() => {
                                    return 'HHello';
                                }} onFailure={() => {
                                    return 'as'
                                }} clientId={'741620728735-djpm81p21iaj4f8b9ta34779oihfobv6.apps.googleusercontent.com'}
                                />
                            </div>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login