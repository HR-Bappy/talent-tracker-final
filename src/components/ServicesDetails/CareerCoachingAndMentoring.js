import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BulletIconsImg from "../../asset/images/icons/bulletPoints.webp";

class CareerCoachingAndMentoring extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg">
                    <Container>
                        <Row>
                            <Col lg="12" md="12" sm="12">
                                <p className="pageSection__title pt-5">CAREER COACHING & MENTORING</p>
                                <p className="greyBar"></p>
                            </Col>

                        </Row>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">Our Services</p>
                        </div>

                        <ul className="serviceDetails__list mt-3">
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> One to One career counseling</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> CV writing assistance </li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Corporate career development workshop</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Employee placement at the end of project</li>
                        </ul>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default CareerCoachingAndMentoring;