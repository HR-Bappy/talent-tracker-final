import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class LoginRegistration extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg">
                    <Container className="pt-5">
                        <Row className="mt-5 loginRegistration__pageArea">
                            <Col lg="6" md="6" sm="12">
                                <p className="pageSection__title pt-5">Registration</p>
                                <p className="darkGreyBarBig"></p>

                                <div className="text-center mt-5">
                                    <ul className="loginRegistration__registrationSection">
                                        <li><Link to="/CreateAccountPage"><button className="loginRegistration__registrationBtn">Job seekers</button></Link></li>
                                        <li><Link to="/ClientRegForm"><button className="loginRegistration__registrationBtn">clients</button></Link></li>
                                        <li><Link to="/ConsultantAndCareerAdvisorRegPage"><button className="loginRegistration__registrationBtn">consultant/advisor</button></Link></li>
                                        <li><Link to="/FreelanceRecruiterRegPage"><button className="loginRegistration__registrationBtn">freelance recruiter</button></Link></li>
                                    </ul>
                                </div>
                            </Col>

                            <Col lg="6" md="6" sm="12" className="loginRegistration__signInSection">
                                <p className="pageSection__title loginRegistration__signInTitle pt-5">Sign In</p>
                                <p className="whiteBarSignin"></p>

                                <Form className="loginRegistration__formArea" action="https://halcyonbd.com/talent/login" method="POST">
                                    <Form.Group>
                                        <Form.Label className="from__label clientReg__formLabel loginRegistration__label mt-2">Email</Form.Label>
                                        <Form.Control className="formArea__dropDown formAreaBorder" type="email" name="email" placeholder="Type Your Email Address"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="from__label clientReg__formLabel loginRegistration__label mt-2">Password</Form.Label>
                                        <Form.Control className="formArea__dropDown formAreaBorder" type="password" name="password" placeholder="Enter Password"/>
                                    </Form.Group>

                                    <Row>
                                        <Col lg="6" md="6" sm="12">
                                            <div className="mt-5">
                                                <a className="loginRegistration__forgotPassword" href="#">Forgot User ID or Password?</a>
                                            </div>
                                        </Col>

                                        <Col lg="6" md="6" sm="12">
                                            <div className="mt-4">
                                                <Button className="loginRegistration__signInBtn" type="submit"> Sign In </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default LoginRegistration;