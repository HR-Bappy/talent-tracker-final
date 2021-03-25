import React, { Component,Fragment } from 'react';
import { Container,Row,Col,Form,Button} from 'react-bootstrap';
import emailIcon from './../../asset/images/icons/emailIcon.webp' ;
import phoneIcon from './../../asset/images/icons/phoneIcon.webp' ;
import locationIcon from './../../asset/images/icons/locationIcon.webp' ;
import sendMessageIcon from './../../asset/images/icons/sendMessage.webp' ;

class contact extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <p className="contact__sectionTitle">Contact Us</p>
                    <p className="greyBar"></p>
                </Container>

                <div className="contact__sectionArea mt-4">
                    <Container>
                        <Row className="text-center">
                            <Col lg="4" md="4" sm="12">
                                <img className="mt-5 mb-3" src={emailIcon} alt="icon"/>
                                <p className="contact__details"> <a href="mailto:contact@mydomain.com">contact@mydomain.com </a></p>
                                <p className="contact__details"> <a href="mailto:info@mydomain.com">info@mydomain.com </a></p>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <img className="mt-5 mb-3" src={phoneIcon} alt="icon"/>
                                <p className="contact__details"> <a href="tel:1800-656-1234">1800-656-1234</a></p>
                                <p className="contact__details"> <a href="tel:+1 9865 43210">+1 9865 43210</a></p>
                            </Col>

                            <Col lg="4" md="4" sm="12">
                                <img className="mt-5 mb-3" src={locationIcon} alt="icon"/>
                                <p className="contact__details">
                                    111, Main St. Down Town, <br/>
                                    City Name, Country 65841
                                </p>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col lg="7" md="7" sm="12">
                                <Form action="#">
                                    <Form.Group>
                                        <Form.Control className="formArea" placeholder="Enter Full Name" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control className="formArea" type="email" placeholder="Enter Email Address" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control className="formArea" placeholder="Enter Phone Number (Optional)" />
                                    </Form.Group>

                                    <Form.Row>
                                        <Form.Group as={Col} >
                                        <Form.Control className="formArea" placeholder="Designation (Optional)" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                        <Form.Control className="formArea"  placeholder="Organization Name (Optional)" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group >
                                        <Form.Control className="formArea" placeholder="Your Message" as="textarea" rows={3} />
                                    </Form.Group>

                                    <Button className="grdiantBtn contact__btn" type="submit">
                                       <span> <img src={sendMessageIcon} alt="submit-btn" /> </span> SEND MESSAGE
                                    </Button>
                                </Form>
                            </Col>

                            <Col lg="5" md="5" sm="12">
                                <iframe className="contact__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.214932281053!2d90.3623941143853!3d23.77535948457705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b93daff949d3%3A0xf5424a1e248e910b!2sHalcyon!5e0!3m2!1sen!2sbd!4v1611571181713!5m2!1sen!2sbd" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default contact;