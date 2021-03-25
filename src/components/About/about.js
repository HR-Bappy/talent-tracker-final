import React, { Component,Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

class about extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg="4" md="4" sm="12">
                            <div className="about__titleSection">
                                <p className="about__title">About Us</p>
                                <p className="greyBar"></p>
                            </div>
                        </Col>

                        <Col lg="8" md="8" sm="12">
                            <div className="about__desSection">
                                <p className="about__des">
                                    TalenTracker Limited is a full service Human Resources Business Partnering and Consultancy firm. The primary area of services include Talent sourcing and acquisition partnering, Training, Management and Legal Consultancy.
                                    <br/><br/>
                                    Career Coaching Consultancy. HR Outsourcing and payroll management and business support services.
                                    <br/><br/>
                                    TalenTracker also aims to contribute to the society through supporting the potential professionals by counselling them to choose the appropriate career path for them
                                    <br/><br/>
                                    <Link to="/AboutTalentTrackerPage"><button className="talentTracker__btn about__seeMoreBtn mt-5">see more</button></Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default about;