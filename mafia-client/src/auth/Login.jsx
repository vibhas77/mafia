import React, { useState , Component } from 'react'
import Card from "react-bootstrap/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GoogleLogin from "react-google-login";
import FormGroup from "react-bootstrap/FormGroup";
import AuthenticationService from "./AuthenticationService.js";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleEmail(event) {
        this.setState(
            {
                email : event.target.value
            }
        )
    }

    handlePass(event) {
        this.setState(
            {
                password : event.target.value
            }
        )
    }


    loginClicked(event) {
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);

        AuthenticationService
            .executeBasicAuthenticationService(this.state.email, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.email, this.state.password)
                this.props.history.push(`/courses`)
            }).catch(() => {
            this.setState({ showSuccessMessage: false });
            this.setState({ hasLoginFailed: true });
        });

        // AuthenticationService
        //     .executeJwtAuthenticationService(this.state.username, this.state.password)
        //     .then((response) => {
        //         AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
        //         this.props.history.push(`/courses`)
        //     }).catch(() => {
        //         this.setState({ showSuccessMessage: false })
        //         this.setState({ hasLoginFailed: true })
        //     })

    }

    render() {
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
                                <h4><FontAwesomeIcon icon="user"/> Login</h4>
                            </Row>
                            <Row style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: '1em'
                            }}>
                                <Form style={{width: '75%'}}>
                                    <Col md={12}><FormGroup controlId="email"><FormControl type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/></FormGroup></Col>
                                    <Col><FormGroup controlId='password'> <FormControl type="password" placeholder="Password" style={{marginTop: '0.5em'}} value={this.state.password} onChange={this.handlePass}/></FormGroup></Col>
                                    <Col style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: '1.5em'
                                    }}>
                                        <Button variant="dark" style={{marginRight: '10px'}} onClick={this.loginClicked}> Login </Button> or
                                        <Button variant="light" style={{marginLeft: '10px'}}> Signup </Button>
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
                                    <GoogleLogin
                                        onSuccess={(obj) => {
                                            // GoogleAuth.isSignedIn.get();
                                            console.log(window.gapi.auth2.getAuthInstance().isSignedIn.get());
                                            console.log(obj);
                                            return 'HHello';
                                        }}
                                        onFailure={() => {
                                            // GoogleAuth.isSignedIn.get()
                                            return 'as';
                                        }}
                                        clientId={'741620728735-djpm81p21iaj4f8b9ta34779oihfobv6.apps.googleusercontent.com'}
                                    />
                                </div>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Login