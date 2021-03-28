import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import userIcon from "../../asset/images/user.webp";
import {Link} from "react-router-dom";

class ConsultantAndCareerAdvisor extends Component {
    render() {
        return (
            <Fragment>
                <div className="consultant__sectionArea">
                    <div className="section__titleBanner">
                        <div className="section__titleBanner--overlay">
                            <div>
                                <p className="section__title">Consultant & Career Advisor</p>
                                <p className="whiteBar"></p>
                            </div>
                        </div>
                    </div>

                    <Container className="text-center">
                        <Row className=" mt-5 mb-5 consultantAndCareerAdvisor__cardArea">
                            <Col lg="6" md="6" sm="12">
                                <Link to="/ConsultantPage">
                                    <Card className="consultantAndCareerAdvisor__card">
                                        <Card.Img className="consultantAndCareerAdvisor__img" variant="top" src={userIcon} />
                                        <Card.Body>
                                            <Card.Title className="consultantAndCareerAdvisor__title">Consultant / Industry Expert</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col lg="6" md="6" sm="12">
                                <Link to="/CareerAdvisorPage">
                                    <Card className="consultantAndCareerAdvisor__card">
                                        <Card.Img className="consultantAndCareerAdvisor__img" variant="top" src={userIcon} />
                                        <Card.Body>
                                            <Card.Title className="consultantAndCareerAdvisor__title">Career Advisor</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <p className="verticalBar consultant__verticalBar"></p>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default ConsultantAndCareerAdvisor;