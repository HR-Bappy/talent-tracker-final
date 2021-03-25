import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BulletIconsImg from "../../asset/images/icons/bulletPoints.webp";

class AboutTalentTracker extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg">
                    <Container>
                        <Row>
                            <Col lg="12" md="12" sm="12">
                                <p className="pageSection__title pt-5">About Talent Tracker</p>
                                <p className="greyBar"></p>
                            </Col>

                            {/*<Col lg="7" md="7" sm="12">*/}
                            {/*    <div className="serviceDetails__briefArea">*/}
                            {/*        <p className="serviceDetails__brief">*/}
                            {/*            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.popularised in the 1960s with the release of Letraset sheets.*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*</Col>*/}
                        </Row>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">About Us</p>
                        </div>

                        <p className="aboutTalentTracker__text mt-5">
                            TalenTracker Limited is a full service Human
                            Resources Business Partnering and Consultancy firm. The primary area of services include Talent sourcing and acquisition partnering, Training, Management and Legal Consultancy, Career Coaching Consultancy, HR Outsourcing and payroll management and
                            business support services.
                            <br/><br/>
                            TalenTracker also aims to contribute to the society through supporting the potential professionals by counselling them to choose the appropriate career path for them.

                        </p>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">MISSION</p>
                        </div>

                        <p className="aboutTalentTracker__text mt-5">
                            To be a professional, enthusiastic
                            and innovative service firm, dedicated to providing professional HR Consulting
                            services and evolving Solutions that help our customers become more productive.

                        </p>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">VISION</p>
                        </div>

                        <p className="aboutTalentTracker__text mt-5">
                            To be the benchmark service provider in the areas of business we operate by
                            ensuring reliable, appropriate, accurate, compliant and ethical service delivery.

                        </p>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">CORE VALUES</p>
                        </div>

                        <p className="aboutTalentTracker__text mt-5">
                            <b>Commitment:</b> We are committed to
                            deliver superior services with integrity, trust and appreciation to maintain customer loyalty.

                        </p>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">Excellence</p>
                        </div>

                        <p className="aboutTalentTracker__text mt-5">
                            We strive for excellence and quality in everything we do and deliver client-focused solutions that exceed expectations.
                        </p>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">Integrity</p>
                        </div>

                        <p className="aboutTalentTracker__text mt-5">
                            We will act with honesty and integrity and practice the highest ethical standards.
                        </p>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">Partnership</p>
                        </div>

                        <p className="aboutTalentTracker__text mt-5">
                            We will work in partnership with our clients through enthusiasm to drive their business forward.
                        </p>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">Confidentiality</p>
                        </div>

                        <p className="aboutTalentTracker__text mt-5">
                            We are committed to ensure the confidentiality of the information shared by each client.
                        </p>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default AboutTalentTracker;