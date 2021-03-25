import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BulletIconsImg from "../../asset/images/icons/bulletPoints.webp";

class EmployeeBenefitSchemeDesignAndApproval extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg ">
                    <Container>
                        <Row>
                            <Col lg="12" md="12" sm="12">
                                <p className="pageSection__title pt-5">Employee Benefit Scheme Design and Approval</p>
                                <p className="greyBar"></p>
                            </Col>

                        </Row>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">Our Services</p>
                        </div>

                        <ul className="serviceDetails__list mt-3">
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Provident Fund (PF) Policy development and regulatory approval</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Gratuity Fund (GF) Policy Development and Approval </li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Workers Profit Participation Fund (WPPF) formation and approval</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Management of PF, GF and WPPF funds</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Service Rules Preparation and Approval as per Labour Law 2006 and Amendments</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Any other services related to employee benefits and Labour law</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> PF, GF, WPPF Formation, Approval and Management</li>
                        </ul>

                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default EmployeeBenefitSchemeDesignAndApproval;