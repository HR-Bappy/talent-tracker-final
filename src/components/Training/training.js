import React, { Component,Fragment } from 'react';
import {Col, Container, Row, Pagination, Button} from "react-bootstrap";
import JobIcon from './../../asset/images/jobs/jobsIcon.webp';

class careerAdvisor extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg">
                    <Container>
                        <p className="pageSection__title pt-5">Trainings</p>
                        <p className="greyBar"></p>

                        <div className="jobCategory__checkBoxSection mt-4">
                            <Row>
                                <Col lg="4" md="4" sm="12">
                                    <div className="p-4 jobCategory__checkBoxSection--responsive jobCategory__checkBoxSection--FirstSectionResponsive">
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

                                <Col lg="4" md="4" sm="12">
                                    <div className="p-4 jobCategory__checkBoxSection--responsive">
                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> Sales</label><br/>

                                        <input type="checkbox"/>
                                        <label className="checkbox__label"> HR </label><br/>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Row className="mt-5">
                                <Col lg="4" md="6" sm="12">
                                    <div className="avaiablejobs__jobCard">
                                        <img className="avaiablejobs__jobIcon" src={JobIcon} alt="jobIcon"/>
                                        <div className="avaiablejobs__jobDes">
                                            <p className="availableJobs__jobTitle">Training Title</p>
                                            <p className="availableJobs__jobCategory">Training Category</p>
                                            <Button className="availableJobs__btn details__btn mt-2">View Details</Button>
                                        </div>
                                    </div>

                                    <div className="avaiablejobs__jobCard">
                                        <img className="avaiablejobs__jobIcon" src={JobIcon} alt="jobIcon"/>
                                        <div className="avaiablejobs__jobDes">
                                            <p className="availableJobs__jobTitle">Training Title</p>
                                            <p className="availableJobs__jobCategory">Training Category</p>
                                            <Button className="availableJobs__btn details__btn mt-2">View Details</Button>
                                        </div>
                                    </div>

                                    <div className="avaiablejobs__jobCard">
                                        <img className="avaiablejobs__jobIcon" src={JobIcon} alt="jobIcon"/>
                                        <div className="avaiablejobs__jobDes">
                                            <p className="availableJobs__jobTitle">Training Title</p>
                                            <p className="availableJobs__jobCategory">Training Category</p>
                                            <Button className="availableJobs__btn details__btn mt-2">View Details</Button>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg="4" md="6" sm="12">
                                    <div className="avaiablejobs__jobCard">
                                        <img className="avaiablejobs__jobIcon" src={JobIcon} alt="jobIcon"/>
                                        <div className="avaiablejobs__jobDes">
                                            <p className="availableJobs__jobTitle">Training Title</p>
                                            <p className="availableJobs__jobCategory">Training Category</p>
                                            <Button className="availableJobs__btn details__btn mt-2">View Details</Button>
                                        </div>
                                    </div>

                                    <div className="avaiablejobs__jobCard">
                                        <img className="avaiablejobs__jobIcon" src={JobIcon} alt="jobIcon"/>
                                        <div className="avaiablejobs__jobDes">
                                            <p className="availableJobs__jobTitle">Training Title</p>
                                            <p className="availableJobs__jobCategory">Training Category</p>
                                            <Button className="availableJobs__btn details__btn mt-2">View Details</Button>
                                        </div>
                                    </div>

                                    <div className="avaiablejobs__jobCard">
                                        <img className="avaiablejobs__jobIcon" src={JobIcon} alt="jobIcon"/>
                                        <div className="avaiablejobs__jobDes">
                                            <p className="availableJobs__jobTitle">Training Title</p>
                                            <p className="availableJobs__jobCategory">Training Category</p>
                                            <Button className="availableJobs__btn details__btn mt-2">View Details</Button>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg="4" md="6" sm="12">
                                    <div className="avaiablejobs__jobCard">
                                        <img className="avaiablejobs__jobIcon" src={JobIcon} alt="jobIcon"/>
                                        <div className="avaiablejobs__jobDes">
                                            <p className="availableJobs__jobTitle">Training Title</p>
                                            <p className="availableJobs__jobCategory">Training Category</p>
                                            <Button className="availableJobs__btn details__btn mt-2">View Details</Button>
                                        </div>
                                    </div>

                                    <div className="avaiablejobs__jobCard">
                                        <img className="avaiablejobs__jobIcon" src={JobIcon} alt="jobIcon"/>
                                        <div className="avaiablejobs__jobDes">
                                            <p className="availableJobs__jobTitle">Training Title</p>
                                            <p className="availableJobs__jobCategory">Training Category</p>
                                            <Button className="availableJobs__btn details__btn mt-2">View Details</Button>
                                        </div>
                                    </div>

                                    <div className="avaiablejobs__jobCard">
                                        <img className="avaiablejobs__jobIcon" src={JobIcon} alt="jobIcon"/>
                                        <div className="avaiablejobs__jobDes">
                                            <p className="availableJobs__jobTitle">Training Title</p>
                                            <p className="availableJobs__jobCategory">Training Category</p>
                                            <Button className="availableJobs__btn details__btn mt-2">View Details</Button>
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