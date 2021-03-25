import React, { Component, Fragment } from 'react';
import {Container, Form, Row, Col, ButtonGroup, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
class createAccount extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg ">
                    <Container>
                        <p className="pageSection__title pt-5">Create Account</p>
                        <p className="greyBar"></p>

                        <Form className="mt-4" action="https://halcyonbd.com/talent/register"  method="POST" enctype="multipart/form-data">
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel mt-2">Name</Form.Label>
                                    <Form.Control className="formArea__dropDown formAreaBorder" type="text" name="name" placeholder="Enter Your Full Name"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label className="from__label clientReg__formLabel mt-2">Gender</Form.Label>
                                    <br/>
                                    <div className="_gender_">
                                        <div className="_gender-item_">
                                            <input className="createAccount__radioBtn" type="radio" name="gender" value="male"/>
                                            <label className="createAccount__radioBtnLabel">Male</label>
                                        </div>
                                        <div className="_gender-item_">
                                            <input className="createAccount__radioBtn" type type="radio" name="gender" value="female"/>
                                            <label className="createAccount__radioBtnLabel">Female</label>
                                        </div>
                                        <div className="_gender-item_">
                                            <input className="createAccount__radioBtn" type type="radio" name="gender" value="others"/>
                                            <label className="createAccount__radioBtnLabel">Others</label>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Label className="from__label clientReg__formLabel">Select Your Skill From Following List</Form.Label>
                                <Form.Control className="formAreaBorder formArea__dropDown" as="select" name="skill">
                                    <option>Finance</option>
                                    <option>Accounting</option>
                                    <option>HR</option>
                                    <option>Supply Chain</option>
                                    <option>Trade Marketing</option>
                                    <option>Business Management</option>
                                    <option>Marketing</option>
                                    <option>Sales</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel mt-2">Email</Form.Label>
                                    <Form.Control className="formArea__dropDown formAreaBorder" type="email" name="email" placeholder="Type Your Email Address."/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label className="from__label clientReg__formLabel mt-2">Mobile No</Form.Label>
                                    <Form.Control className="formArea__dropDown formAreaBorder" type="text" name="phone" placeholder="Type Your Mobile No."/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel mt-2">Password <span className="createAccount__passwordField">(Use al least 8 to 12 Character)</span></Form.Label>
                                    <Form.Control className="formArea__dropDown formAreaBorder" type="password" name="password" placeholder="Password"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label className="from__label clientReg__formLabel mt-2">Re-Type Password</Form.Label>
                                    <Form.Control className="formArea__dropDown formAreaBorder" type="password" name="password" placeholder="Re-Type Password"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel mt-2">Facebook URL</Form.Label>
                                    <Form.Control className="formArea__dropDown formAreaBorder" type="text" name="facebook_url" placeholder="Type Your Facebook URL"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label className="from__label clientReg__formLabel mt-2">Linkedin URL</Form.Label>
                                    <Form.Control className="formArea__dropDown formAreaBorder" type="text" name="linkedin" placeholder="Type Your Linkedin URL"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group className="clientRegFrom__address">
                                <Form.Label className="from__label clientReg__formLabel mt-3">Upload Your CV</Form.Label>
                                <Form.Control className="formArea formAreaFileUpload" type="file" name="cv_image"/>
                                <p className="fileUpload__note">*Choose PDF File</p>
                            </Form.Group>

                            <Form.Group className="clientRegFrom__address">
                                <Form.Label className="from__label clientReg__formLabel mt-3">Upload Image</Form.Label>
                                <Form.Control className="formArea formAreaFileUpload" type="file" name="profile_image"/>
                                <p className="fileUpload__note">*Max file size 2MB, Regulation: 450px, X 600px</p>
                            </Form.Group>

                            <Row>
                                <Col lg="6" md="6" sm="12">
                                    <div className="mt-5">
                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> I agree to the Talent Tracker Terms of Use. Terms & Conditions</label><br/>
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

                    <div className="createAccount__signInSection text-center mt-5">
                        <div>
                            <p className="createAccount__signInSection--text">Already Registered?</p>
                            <Link to="/loginAndReg" className="createAccount__signInSection--btn">Sign In</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default createAccount;