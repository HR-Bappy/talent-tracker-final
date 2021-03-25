import React, { Component,Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bulletPoint from './../../asset/images/bulletPoint.webp';
import {Link} from "react-router-dom";

class services extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={7} md={7} sm={2}>
                            <div className="services__banner">
                            </div>
                        </Col>

                        <Col lg={5} md={5} sm={10}>
                            <p className="services__title">Services</p>
                            <p className="greyBarBig"></p>
                            <div className="service__allServiceArea">
                                <div className="service__allServices ">
                                    <ul>
                                        <li><Link to="/hrServicePage" > <span> <img src={bulletPoint} alt="bullet"/></span> HR Service</Link></li>
                                        <li><Link to="/HrAndPayrollOutsourcingPage"> <span> <img src={bulletPoint} alt="bullet"/></span> HR & Payroll Outsourcing</Link></li>
                                        <li><Link to="/TalentSearchAndOutplacementPage"> <span> <img src={bulletPoint} alt="bullet"/></span> Talent Search & Outplacement</Link></li>
                                        <li><Link to="/HrConsultancyServicesPage"> <span> <img src={bulletPoint} alt="bullet"/></span> HR Consultancy Services</Link></li>
                                        <li><Link to="/CareerCoachingAndMentoringPage"> <span> <img src={bulletPoint} alt="bullet"/></span> Career Coaching and Mentoring</Link></li>
                                        <li><Link to="/TrainingAndDevelopmentPage"> <span> <img src={bulletPoint} alt="bullet"/></span> Training & Development</Link></li>
                                        <li><Link to="/HrAutomationAndHrisConsultancyPage"> <span> <img src={bulletPoint} alt="bullet"/></span> HR Automation & HRIS Consultancy</Link></li>
                                        <li><Link to="/EmployeeBenefitSchemeDesignAndApprovalPage"> <span> <img src={bulletPoint} alt="bullet"/></span> Employee Benefit Scheme Design and Approval</Link></li>
                                        <li><Link to="/BusinessSupportServicesPage"> <span> <img src={bulletPoint} alt="bullet"/></span> Business Support Services</Link></li>
                                        <li><Link to="/ExpatriateAffairsManagementPage"> <span> <img src={bulletPoint} alt="bullet"/></span> Expatriate Affairs Management</Link></li>
                                        <li><Link to="/LicensingServicesPage"> <span> <img src={bulletPoint} alt="bullet"/></span> Licensing Services</Link></li>
                                        <li><Link to="/PersonalTaxManagementPage"> <span> <img src={bulletPoint} alt="bullet"/></span> Personal Tax Management</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default services;