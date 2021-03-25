import React, { Component,Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import clientLogo from './../../asset/images/clients/clients-logo.webp';

class clients extends Component {
    render() {
        return (
            <Fragment>
                <div className="section__titleBanner">
                    <div className="section__titleBanner--overlay">
                        <div>
                            <p className="section__title">Clients</p>
                            <p className="whiteBar"></p>
                        </div>
                    </div>
                </div>

                <Container>
                    <Row className="text-center mt-5 mb-5">
                    <ul className="client__logoSection">
                        <li> <img className="client__logoImg" src={clientLogo} alt="client-logo"/> </li>
                        <li> <img className="client__logoImg" src={clientLogo} alt="client-logo"/> </li>
                        <li> <img className="client__logoImg" src={clientLogo} alt="client-logo"/> </li>
                        <li> <img className="client__logoImg" src={clientLogo} alt="client-logo"/> </li>
                        <li> <img className="client__logoImg" src={clientLogo} alt="client-logo"/> </li>
                        <li> <img className="client__logoImg" src={clientLogo} alt="client-logo"/> </li>
                        <li> <img className="client__logoImg" src={clientLogo} alt="client-logo"/> </li>
                        <li> <img className="client__logoImg" src={clientLogo} alt="client-logo"/> </li>
                        <li> <img className="client__logoImg" src={clientLogo} alt="client-logo"/> </li>
                        <li> <img className="client__logoImg" src={clientLogo} alt="client-logo"/> </li>
                    </ul>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default clients;