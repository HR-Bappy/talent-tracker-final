import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BulletIconsImg from './../../asset/images/icons/bulletPoints.webp'

class hrService extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg serviceDetrails__pageBg">
                    <Container>
                        <Row>
                            <Col lg="5" md="5" sm="12">
                                <p className="pageSection__title pt-5">HR Services</p>
                                <p className="greyBar"></p>
                            </Col>
                        </Row>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">Internal Services</p>
                        </div>

                        <ul className="serviceDetails__list mt-3">
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Job descriptions and other HR forms</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Disciplinary procedures </li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Performance Management training and assistance</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Job evaluation</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> HR Policy and Process development</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Preparation and approval of Service Manual from authority</li>
                        </ul>
                    </Container>
                </div>

                <div>
                    <Container>
                        <div className="serviceDetails__titleBg serviceDetails__titleBgResponsiveOne mt-5">
                            <p className="serviceDetails__title ">External Services</p>
                        </div>

                        <ul className="serviceDetails__list mt-3">
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Reference and Background Checking</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Work Permit processing and security clearance </li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Visa Processing </li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> License Services</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Industry top-line benefits survey</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Expatriate Management</li>
                        </ul>
                        <p className="hrService__items">Labour Law compliance audit and management</p>

                        <div className="serviceDetails__titleBg  serviceDetails__titleBgResponsiveTwo mt-5">
                            <p className="serviceDetails__title">Employee Benefit Scheme Design and Approval</p>
                        </div>

                        <ul className="serviceDetails__list serviceDetails__list--responsive mt-3">
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Provident Fund(PF) Policy development and regulatory approval</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Gratuity Fund (GF) Policy Development and Approval </li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Workers Profit Participation Fund (WPPF) formation and approval</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Management of PF, GF and WPPF funds</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Service Rules Preparation and Approval as per Labour Law 2006 and Amendments</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Any other services related to employee benefits and Labour law</li>
                        </ul>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default hrService;