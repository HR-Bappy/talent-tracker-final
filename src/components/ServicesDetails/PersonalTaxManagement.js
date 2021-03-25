import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import BulletIconsImg from "../../asset/images/icons/bulletPoints.webp";

class PersonalTaxManagement extends Component {
    render() {
        return (
            <Fragment>
                <div className="page__bg">
                    <Container>
                        <Row>
                            <Col lg="12" md="12" sm="12">
                                <p className="pageSection__title pt-5"> Personal Tax Management</p>
                                <p className="greyBar"></p>
                            </Col>

                        </Row>

                        <div className="serviceDetails__titleBg mt-5">
                            <p className="serviceDetails__title">Our Services</p>
                        </div>

                        <ul className="serviceDetails__list mt-3">
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Personal tax planning, preparation and returns submission</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Expatriate Tax Management</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> Personal Financial planning support for tax management</li>
                            <li> <span className="serviceDetails__bullet"><img src={BulletIconsImg} alt="bullet" /></span> And other tax related supports</li>
                        </ul>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default PersonalTaxManagement;