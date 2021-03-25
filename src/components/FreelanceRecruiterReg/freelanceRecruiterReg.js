import React, { Component,Fragment } from 'react';
import {Col, Container, Row, Form, Button} from "react-bootstrap";

class freelanceRecruiterReg extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg">
                    <div className="freelanceRecruiterReg__section">
                        <Container>
                            <p className="pageSection__title pt-5">Freelance Recruiter</p>
                            <p className="greyBar"></p>

                            <Form action="#" action="https://halcyonbd.com/talent/frecuiter"  method="POST">
                                <Row className="mt-5">
                                    <Col lg="6" md="6" sm="12">
                                        <Form.Group>
                                            <Form.Label className="from__label">Name</Form.Label>
                                            <Form.Control className="formArea formAreaBorder" name="name" placeholder="Enter Full Name" />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="from__label">Email Address</Form.Label>
                                            <Form.Control className="formArea formAreaBorder" type="email" name="email" placeholder="Enter Your Email" />
                                        </Form.Group>
                                        
                                    </Col>

                                    <Col lg="6" md="6" sm="12">
                                        <Form.Group>
                                            <Form.Label className="from__label">Mobile Number</Form.Label>
                                            <Form.Control className="formArea formAreaBorder" name="phone"  placeholder="+880xxxx xxxxxx" />
                                        </Form.Group>

                                        <Form.Row>
                                            <Form.Group as={Col} >
                                                <Form.Label className="from__label">Password</Form.Label>
                                                <Form.Control className="formArea formAreaBorder" name="password" type="password" placeholder="Password" />
                                            </Form.Group>

                                            <Form.Group as={Col}>
                                                <Form.Label className="from__label">Confirm Password</Form.Label>
                                                <Form.Control className="formArea formAreaBorder" name="password"  type="password" placeholder="Confirm Password" />
                                            </Form.Group>
                                        </Form.Row>

                                     
                                    </Col>
                                    
                                    <Col lg="12" md="12" sm="12">
                                        <Form.Group as={Col}>
                                                <Form.Label className="from__label">Address</Form.Label>
                                                <Form.Control className="formArea formAreaBorder" name="address"  type="text" placeholder="Address" />
                                            </Form.Group>

                                            </Col>


                                    <Col lg="6" md="6" sm="12">
                                        <div className="mt-5">
                                            <input type="checkbox"/>
                                            <label className="checkbox__label"> I agree to the Talen Tracker Terms of use. Terms & Conditions</label><br/>

                                            <input type="checkbox"/>
                                            <label className="checkbox__label"> Subscribe to Talen Tracker Newsletter.</label><br/>
                                        </div>
                                    </Col>

                                    <Col lg="6" md="6" sm="12">
                                       <div className="mt-5">
                                            <Button className="grdiantBtn freelanceRecruiterReg__btn" type="submit"> SUBMIT </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default freelanceRecruiterReg;