import React, {Component, Fragment} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BulletIconsImg from './../../asset/images/icons/bulletPoints.webp'

class HrAndPayrollOutsourcing extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg ">
                    <div >
                        <Container>
                            <Row>
                                <Col lg="12" md="12" sm="12">
                                    <p className="pageSection__title pt-5">HR & PAYROLL OUTSOURCING</p>
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
                                <p className="serviceDetails__title">HR Outsourcing</p>
                            </div>

                            <ul className="serviceDetails__list mt-3">
                                <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Contract Payroll Services</li>
                                <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Employee Engagement </li>
                                <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> IR & Compliance</li>
                            </ul>
                        </Container>
                    </div>

                    <div>
                        <Container>
                            <div className="serviceDetails__titleBg serviceDetails__titleBgResponsiveOne mt-5">
                                <p className="serviceDetails__title ">Payroll Outsourcing</p>
                            </div>

                            <ul className="serviceDetails__list mt-3">
                                <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> We manage all your payroll operations from data entry</li>
                                <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Payment processing to banking transactions & other need based services like pay slip</li>
                                <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> salary certificates, NOC, experience letter etc. </li>
                            </ul>

                            <div className="serviceDetails__titleBg  serviceDetails__titleBgResponsiveTwo mt-5">
                                <p className="serviceDetails__title">Service Outsourcing</p>
                            </div>

                            <ul className="serviceDetails__list serviceDetails__list--responsive mt-3">
                                <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Employee on-boarding</li>
                                <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> HR database management </li>
                                <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Employee separation and other administrative services</li>
                            </ul>
                        </Container>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HrAndPayrollOutsourcing;