import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import managementTeam from './../../asset/images/management-team/management-team-1.webp';
import facebookIcon from './../../asset/images/management-team/facebook-icon.webp';
import twitterIcon from './../../asset/images/management-team/twitter-icon.webp';
import linkedinIcon from './../../asset/images/management-team/linked-in-icon.webp';
import behanceIcon from './../../asset/images/management-team/behance-icon.webp';

class ManagementTeam extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <p className="managementTeam__title mt-5">Management Team</p>
                    <Row className="mt-5 mb-5">
                        <Col lg="3" md="6" sm="12">
                            <Card className="managementTeam__card">
                                <div className="managementTeam__imgSection">
                                    <Card.Img className="managementTeam__cardImg" variant="top" src={managementTeam} alt="management-team"/>
                                    <div className="managementTeam__overlay">
                                        <ul className="managementTeam__socialIcon">
                                            <li> <a href="#"> <img src={facebookIcon} alt="social-icon"/> </a> </li>
                                            <li> <a href="#"> <img src={twitterIcon} alt="social-icon"/> </a> </li>
                                            <li> <a href="#"> <img src={linkedinIcon} alt="social-icon"/> </a> </li>
                                            <li> <a href="#"> <img src={behanceIcon} alt="social-icon"/> </a> </li>
                                        </ul>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title className="managementTeam__name mt-3">Jhon Doe</Card.Title>
                                    <Card.Text className="managementTeam__designation">Founder</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg="3" md="6" sm="12">
                            <Card className="managementTeam__card">
                                <div className="managementTeam__imgSection">
                                    <Card.Img className="managementTeam__cardImg" variant="top" src={managementTeam} alt="management-team"/>
                                    <div className="managementTeam__overlay">
                                        <ul className="managementTeam__socialIcon">
                                            <li> <a href="#"> <img src={facebookIcon} alt="social-icon"/> </a> </li>
                                            <li> <a href="#"> <img src={twitterIcon} alt="social-icon"/> </a> </li>
                                            <li> <a href="#"> <img src={linkedinIcon} alt="social-icon"/> </a> </li>
                                            <li> <a href="#"> <img src={behanceIcon} alt="social-icon"/> </a> </li>
                                        </ul>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title className="managementTeam__name mt-3">Jhon Doe</Card.Title>
                                    <Card.Text className="managementTeam__designation">Founder</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg="3" md="6" sm="12">
                            <Card className="managementTeam__card">
                                <div className="managementTeam__imgSection">
                                    <Card.Img className="managementTeam__cardImg" variant="top" src={managementTeam} alt="management-team"/>
                                    <div className="managementTeam__overlay">
                                        <ul className="managementTeam__socialIcon">
                                            <li> <a href="#"> <img src={facebookIcon} alt="social-icon"/> </a> </li>
                                            <li> <a href="#"> <img src={twitterIcon} alt="social-icon"/> </a> </li>
                                            <li> <a href="#"> <img src={linkedinIcon} alt="social-icon"/> </a> </li>
                                            <li> <a href="#"> <img src={behanceIcon} alt="social-icon"/> </a> </li>
                                        </ul>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title className="managementTeam__name mt-3">Jhon Doe</Card.Title>
                                    <Card.Text className="managementTeam__designation">Founder</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg="3" md="6" sm="12">
                            <Card className="managementTeam__card">
                                <div className="managementTeam__imgSection">
                                    <Card.Img className="managementTeam__cardImg" variant="top" src={managementTeam} alt="management-team"/>
                                    <div className="managementTeam__overlay">
                                        <ul className="managementTeam__socialIcon">
                                            <li> <a href="#"> <img src={facebookIcon} alt="social-icon"/> </a> </li>
                                            <li> <a href="#"> <img src={twitterIcon} alt="social-icon"/> </a> </li>
                                            <li> <a href="#"> <img src={linkedinIcon} alt="social-icon"/> </a> </li>
                                            <li> <a href="#"> <img src={behanceIcon} alt="social-icon"/> </a> </li>
                                        </ul>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title className="managementTeam__name mt-3">Jhon Doe</Card.Title>
                                    <Card.Text className="managementTeam__designation">Founder</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ManagementTeam;