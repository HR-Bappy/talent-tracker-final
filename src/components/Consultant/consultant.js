import React, { Component,Fragment } from 'react';
import {Col, Container, Row, Pagination, Button} from "react-bootstrap";
import ConsultantImage from './../../asset/images/consultant.webp';

class careerAdvisor extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg">
                    <Container>
                        <p className="pageSection__title pt-5">Consultant</p>
                        <p className="greyBar"></p>

                        <div className="jobCategory__checkBoxSection mt-4">
                            <Row>
                                <Col lg="4" md="4" sm="12">
                                    <div className="p-4 jobCategory__checkBoxSection--responsive jobCategory__checkBoxSection--responsiveFirst">
                                        <input type="checkbox"/>
                                        <label className="checkbox__label">Finance</label><br/>

                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> Accounting </label><br/>

                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> Supply Chain </label><br/>
                                    </div>
                                </Col>

                                <Col lg="4" md="4" sm="12">
                                    <div className="p-4 jobCategory__checkBoxSection--responsive">
                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> Trade Marketing</label><br/>

                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> Business Management </label><br/>

                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> Marketing </label><br/>
                                    </div>
                                </Col>

                                <Col lg="4" md="4" sm="12 ">
                                    <div className="p-4 jobCategory__checkBoxSection--responsive">
                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> Sales</label><br/>

                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> HR </label><br/>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Row className="consultant__cardSectionArea mt-5">
                            <Col lg="4" md="6" sm="12">
                                <div className="careerAdvisor__cardArea">
                                    <img className="careerAdvisor__cardImg" src={ConsultantImage} alt="consultantImg"/>
                                    <div className="careerAdvisor__cardItems">
                                        <p className="careerAdvisor__name careerAdvisor__des">Name</p>
                                        <p className="careerAdvisor__companyName careerAdvisor__des">Company Name</p>
                                        <p className="careerAdvisor__designation careerAdvisor__des">Designation</p>
                                        <p className="careerAdvisor__specialistField careerAdvisor__des">Career Advisor Specialist</p>
                                        <p className="careerAdvisor__charge careerAdvisor__des">Hourly Charge: 1000 BDT</p>
                                        <Button className="careerAdvisor__connect--btn details__btn mt-2">Connect</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className="careerAdvisor__cardArea">
                                    <img className="careerAdvisor__cardImg" src={ConsultantImage} alt="consultantImg"/>
                                    <div className="careerAdvisor__cardItems">
                                        <p className="careerAdvisor__name careerAdvisor__des">Name</p>
                                        <p className="careerAdvisor__companyName careerAdvisor__des">Company Name</p>
                                        <p className="careerAdvisor__designation careerAdvisor__des">Designation</p>
                                        <p className="careerAdvisor__specialistField careerAdvisor__des">Career Advisor Specialist</p>
                                        <p className="careerAdvisor__charge careerAdvisor__des">Hourly Charge: 1000 BDT</p>
                                        <Button className="careerAdvisor__connect--btn details__btn mt-2">Connect</Button>
                                    </div>
                                </div>  
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className="careerAdvisor__cardArea">
                                    <img className="careerAdvisor__cardImg" src={ConsultantImage} alt="consultantImg"/>
                                    <div className="careerAdvisor__cardItems">
                                        <p className="careerAdvisor__name careerAdvisor__des">Name</p>
                                        <p className="careerAdvisor__companyName careerAdvisor__des">Company Name</p>
                                        <p className="careerAdvisor__designation careerAdvisor__des">Designation</p>
                                        <p className="careerAdvisor__specialistField careerAdvisor__des">Career Advisor Specialist</p>
                                        <p className="careerAdvisor__charge careerAdvisor__des">Hourly Charge: 1000 BDT</p>
                                        <Button className="careerAdvisor__connect--btn details__btn mt-2">Connect</Button>
                                    </div>
                                </div>  
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className="careerAdvisor__cardArea">
                                    <img className="careerAdvisor__cardImg" src={ConsultantImage} alt="consultantImg"/>
                                    <div className="careerAdvisor__cardItems">
                                        <p className="careerAdvisor__name careerAdvisor__des">Name</p>
                                        <p className="careerAdvisor__companyName careerAdvisor__des">Company Name</p>
                                        <p className="careerAdvisor__designation careerAdvisor__des">Designation</p>
                                        <p className="careerAdvisor__specialistField careerAdvisor__des">Career Advisor Specialist</p>
                                        <p className="careerAdvisor__charge careerAdvisor__des">Hourly Charge: 1000 BDT</p>
                                        <Button className="careerAdvisor__connect--btn details__btn mt-2">Connect</Button>
                                    </div>
                                </div>  
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className="careerAdvisor__cardArea">
                                    <img className="careerAdvisor__cardImg" src={ConsultantImage} alt="consultantImg"/>
                                    <div className="careerAdvisor__cardItems">
                                        <p className="careerAdvisor__name careerAdvisor__des">Name</p>
                                        <p className="careerAdvisor__companyName careerAdvisor__des">Company Name</p>
                                        <p className="careerAdvisor__designation careerAdvisor__des">Designation</p>
                                        <p className="careerAdvisor__specialistField careerAdvisor__des">Career Advisor Specialist</p>
                                        <p className="careerAdvisor__charge careerAdvisor__des">Hourly Charge: 1000 BDT</p>
                                        <Button className="careerAdvisor__connect--btn details__btn mt-2">Connect</Button>
                                    </div>
                                </div>  
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className="careerAdvisor__cardArea">
                                    <img className="careerAdvisor__cardImg" src={ConsultantImage} alt="consultantImg"/>
                                    <div className="careerAdvisor__cardItems">
                                        <p className="careerAdvisor__name careerAdvisor__des">Name</p>
                                        <p className="careerAdvisor__companyName careerAdvisor__des">Company Name</p>
                                        <p className="careerAdvisor__designation careerAdvisor__des">Designation</p>
                                        <p className="careerAdvisor__specialistField careerAdvisor__des">Career Advisor Specialist</p>
                                        <p className="careerAdvisor__charge careerAdvisor__des">Hourly Charge: 1000 BDT</p>
                                        <Button className="careerAdvisor__connect--btn details__btn mt-2">Connect</Button>
                                    </div>
                                </div>  
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className="careerAdvisor__cardArea">
                                    <img className="careerAdvisor__cardImg" src={ConsultantImage} alt="consultantImg"/>
                                    <div className="careerAdvisor__cardItems">
                                        <p className="careerAdvisor__name careerAdvisor__des">Name</p>
                                        <p className="careerAdvisor__companyName careerAdvisor__des">Company Name</p>
                                        <p className="careerAdvisor__designation careerAdvisor__des">Designation</p>
                                        <p className="careerAdvisor__specialistField careerAdvisor__des">Career Advisor Specialist</p>
                                        <p className="careerAdvisor__charge careerAdvisor__des">Hourly Charge: 1000 BDT</p>
                                        <Button className="careerAdvisor__connect--btn details__btn mt-2">Connect</Button>
                                    </div>
                                </div>  
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className="careerAdvisor__cardArea">
                                    <img className="careerAdvisor__cardImg" src={ConsultantImage} alt="consultantImg"/>
                                    <div className="careerAdvisor__cardItems">
                                        <p className="careerAdvisor__name careerAdvisor__des">Name</p>
                                        <p className="careerAdvisor__companyName careerAdvisor__des">Company Name</p>
                                        <p className="careerAdvisor__designation careerAdvisor__des">Designation</p>
                                        <p className="careerAdvisor__specialistField careerAdvisor__des">Career Advisor Specialist</p>
                                        <p className="careerAdvisor__charge careerAdvisor__des">Hourly Charge: 1000 BDT</p>
                                        <Button className="careerAdvisor__connect--btn details__btn mt-2">Connect</Button>
                                    </div>
                                </div>  
                            </Col>

                            <Col lg="4" md="6" sm="12">
                                <div className="careerAdvisor__cardArea">
                                    <img className="careerAdvisor__cardImg" src={ConsultantImage} alt="consultantImg"/>
                                    <div className="careerAdvisor__cardItems">
                                        <p className="careerAdvisor__name careerAdvisor__des">Name</p>
                                        <p className="careerAdvisor__companyName careerAdvisor__des">Company Name</p>
                                        <p className="careerAdvisor__designation careerAdvisor__des">Designation</p>
                                        <p className="careerAdvisor__specialistField careerAdvisor__des">Career Advisor Specialist</p>
                                        <p className="careerAdvisor__charge careerAdvisor__des">Hourly Charge: 1000 BDT</p>
                                        <Button className="careerAdvisor__connect--btn details__btn mt-2">Connect</Button>
                                    </div>
                                </div>  
                            </Col>

                            <Pagination className="talentTracker__pagination mt-5">
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Item>{11}</Pagination.Item>
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Item>{13}</Pagination.Item>
                                <Pagination.Item disabled>{14}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default careerAdvisor;