import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BulletIconsImg from "../../asset/images/icons/bulletPoints.webp";

class BusinessSupportServices extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg">
                    <Container>
                        <Row>
                            <Col lg="7" md="7" sm="12">
                                <p className="pageSection__title pt-5">Business Support Services</p>
                                <p className="greyBar"></p>
                            </Col>

                            <Col lg="5" md="5" sm="12">
                                <div className="serviceDetails__briefArea">
                                    <p className="serviceDetails__brief">
                                        We extend our services for establishing new businesses and supporting the existing one. Our services include but not limited to:
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">Our Services</p>
                        </div>

                        <ul className="serviceDetails__list mt-3">
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Company/firm formation</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Regulatory licenses and approvals </li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Legal support through our panel of advisors</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> And all other support services which may require to kick of business</li>
                        </ul>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default BusinessSupportServices;