import React, { Component,Fragment } from 'react';
import { Container,Form, Col,Row,Button } from 'react-bootstrap';

class clientRegForm extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg">
                    <Container>
                        <p className="pageSection__title pt-5">Client Registration Form</p>
                        <p className="greyBar"></p>

                    
                        <Form className="mt-4" action="https://halcyonbd.com/talent/client"  method="POST">
                            <p className="mt-4 mb-4 clientRegForm__sectionTitle">Company Details Information</p>

                            <Form.Group>
                                <Form.Label className="from__label clientReg__formLabel">Company Name</Form.Label>
                                <Form.Control className="formArea formAreaBorder" name="name" type="text" placeholder="Enter Company Name" />
                            </Form.Group>

                            <Form.Group className="clientRegFrom__address">
                                <Form.Label className="from__label clientReg__formLabel mt-1">Company Address</Form.Label>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Control className="formArea formAreaBorder" type="text" placeholder="Line 1" name="company_address1"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Control className="formArea formAreaBorder"  type="text" placeholder="Line 2 (Optional)" name="company_address2" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Control className="formArea formAreaBorder" type="text" placeholder="Line 3 (Optional)" name="company_address3"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Control className="formArea formAreaBorder"  type="text" placeholder="City" name="company_city"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Control className="formArea formAreaBorder" type="text" placeholder="State" name="company_state"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Control className="formArea formAreaBorder"  type="text" name="company_postalcode" placeholder="Postal Code" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Control className="formArea formAreaBorder" type="text" name="company_country" placeholder="Country" />
                            </Form.Group>

                            <Form.Group className="clientRegFrom__address">
                                <Form.Label className="from__label clientReg__formLabel mt-2">Business Description</Form.Label>
                                <Form.Control className="formArea formAreaBorder" name="company_description" type="text" placeholder="Write Business Description" as="textarea" rows={3} />
                            </Form.Group>

                            <Form.Group className="clientRegFrom__address">
                                <Form.Label className="from__label clientReg__formLabel mt-2">Website URL</Form.Label>
                                <Form.Control className="formArea formAreaBorder" name="website_url" type="text" placeholder="Type Website URL"/>
                            </Form.Group>

                            <Form.Group className="clientRegFrom__address">
                                <Form.Label className="from__label clientReg__formLabel mt-2">Email</Form.Label>
                                <Form.Control className="formArea formAreaBorder" name="email" type="email" placeholder="Enter Your Email Address"/>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} >
                                <Form.Label className="from__label clientReg__formLabel mt-2">Password</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="password" type="password" placeholder="Enter a Password" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                <Form.Label className="from__label clientReg__formLabel mt-2">Re-Type Password</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="password" type="password" placeholder="Re-type Password" />
                                </Form.Group>
                            </Form.Row>

                            <p className="mt-5 mb-4 clientRegForm__sectionTitle">Primary Contact</p>

                            <Form.Row>
                                <Form.Group as={Col} >
                                <Form.Label className="from__label clientReg__formLabel mt-2">Contact Person Name</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="contact_name" type="text" placeholder="Enter Your Name" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                <Form.Label className="from__label clientReg__formLabel mt-2">Contact Person Email</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="contact_email"  type="email" placeholder="Enter Your Mobile" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} >
                                <Form.Label className="from__label clientReg__formLabel mt-2">Contact Person Designation</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="contact_designation" type="text" placeholder="Enter Your Designation" />
                                </Form.Group>

                                <Form.Group as={Col}>
                                <Form.Label className="from__label clientReg__formLabel mt-2">Contact Person Mobile</Form.Label>
                                    <Form.Control className="formArea formAreaBorder" name="phone" type="text" placeholder="Enter Your Mobile No." />
                                </Form.Group>
                            </Form.Row>

                            <Row>
                                <Col lg="6" md="6" sm="12">
                                    <div className="mt-5">
                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> I Have Read Pricing Policy And Accepted It</label><br/>
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
            </Fragment>
        );
    }
}

export default clientRegForm;