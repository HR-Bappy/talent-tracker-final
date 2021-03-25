import React, { Component, Fragment } from 'react';
import { Container, Form,Col,Button, Row } from 'react-bootstrap';

class consultantAndCareerAdvisorReg extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg ">
                    <Container>
                        <p className="pageSection__title pt-5">Consultant / Career Advisor</p>
                        <p className="greyBar"></p>
                        <Form className="mt-4" action="https://halcyonbd.com/talent/advisor"  method="POST" enctype="multipart/form-data">
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel">Name</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="name" type="text" placeholder="Type Your Full Name" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel">Email</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="email" type="email" placeholder="Type Your Email Address" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel">Password</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="password" type="password" placeholder="Choose a Password" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel">Re-Type Password</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" type="password" placeholder="Retype Password" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel">Mobile No.</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="phone" type="text" placeholder="Enter Your Mobile No" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel">Address</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="address" type="text" placeholder="Type Your Address" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel">Company Name</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="company_name" type="text" placeholder="Type Your Company Name" />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel">Designation</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="designation" type="text" placeholder="Type Your Designation" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel">Specialist Field</Form.Label>
                                    <Form.Control className="formAreaBorder formArea__dropDown" name="specilist_field" as="select" defaultValue="Finance">
                                        <option>Finance</option>
                                        <option>Accounting</option>
                                        <option>Supply Chain</option>
                                        <option>Trade Marketing</option>
                                        <option>Business Management</option>
                                        <option>Marketing</option>
                                        <option>Sales</option>
                                        <option>HR</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label className="from__label clientReg__formLabel">Linkedin Profile</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" type="text" name="linkedin" placeholder="Enter Your Linkedin Profile URL" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group className="clientRegFrom__address">
                                <Form.Label className="from__label clientReg__formLabel mt-2">About Yourself</Form.Label>
                                <Form.Control className="formArea formAreaBorder" type="text" name="about_you" placeholder="Write About Yourself" as="textarea" rows={3} />
                            </Form.Group>
                            
                            <Form.Group className="clientRegFrom__address">
                                <Form.Label className="from__label clientReg__formLabel mt-3">Upload Image</Form.Label>
                                <Form.Control className="formArea formAreaFileUpload" type="file" name="specilist_image"/>
                                <p className="fileUpload__note">*Max file size 2MB, Regulation: 450px, X 600px</p>
                            </Form.Group>

                            <div className="mt-5">
                            
                                <label className="checkbox__label checkbox__boxItem ">User Type</label>

                               <select className="option_css" name="role">
                                   <option value="3">Consultant</option>
                                   <option value="4">Advisor</option>
                                   </select>                               
                            </div>

                            <Row>
                                <Col lg="6" md="6" sm="12">
                                    <div className="mt-5">
                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> I agree to the Talent Tracker Terms of Use. Terms & Conditions</label><br/>
                                    </div>
                                </Col>

                                <Col lg="6" md="6" sm="12">
                                    <div className="mt-4">
                                        <Button className="grdiantBtn freelanceRecruiterReg__btn" type="submit"> REGISTRATION </Button>
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

export default consultantAndCareerAdvisorReg;