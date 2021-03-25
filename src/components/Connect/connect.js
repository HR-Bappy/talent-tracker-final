import React, { Component, Fragment } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

class connect extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg">
                    <Container>
                        <p className="pageSection__title pt-5">Connect</p>
                        <p className="greyBar"></p>

                        <Form className="mt-4" action="#">
                            <Row>
                                <Col lg="6" md="6" sm="12">
                                    <Form.Group>
                                        <Form.Label className="from__label clientReg__formLabel">Name</Form.Label>
                                        <Form.Control className="formArea formAreaBorder" type="text" placeholder="Type Your Full Name" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="from__label clientReg__formLabel">Email</Form.Label>
                                        <Form.Control className="formArea formAreaBorder" type="email" placeholder="Enter Your Email Address" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="from__label clientReg__formLabel">Duration</Form.Label>
                                        <Form.Control className="formAreaBorder formArea__dropDown" as="select" defaultValue="1 Hour">
                                            <option>1 Hour</option>
                                            <option>2 Hours</option>
                                        </Form.Control>
                                    </Form.Group>
                                    
                                </Col>

                                <Col lg="6" md="6" sm="12">
                                    <Form.Group>
                                        <Form.Label className="from__label clientReg__formLabel">Mobile No</Form.Label>
                                        <Form.Control className="formArea formAreaBorder" type="text" placeholder="+8801xxxx xxxxx" />
                                    </Form.Group>

                                    <Form.Row>
                                        <Form.Group as={Col} >
                                        <   Form.Label className="from__label clientReg__formLabel mt-2">From Date</Form.Label>
                                            <Form.Control className="formArea__dropDown formAreaBorder" type="date"/>
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                            <Form.Label className="from__label clientReg__formLabel mt-2">To Date</Form.Label>
                                            <Form.Control className="formArea__dropDown formAreaBorder"  type="date"/>
                                        </Form.Group>
                                    </Form.Row>
                                </Col>

                                <Col lg="6" md="6" sm="12">
                                    <div className="mt-5">
                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> I agree to the Talent Tracker Terms of Use. Terms & Conditions</label><br/>
                                    </div>
                                </Col>

                                <Col lg="6" md="6" sm="12">
                                    <div className="mt-5">
                                        <Button className="grdiantBtn freelanceRecruiterReg__btn" type="submit"> REQUEST AN APPOINMENT </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default connect;