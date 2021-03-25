import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';

class labourLaw extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <iframe className="mt-5 jobDetails__pdfViewer" src="https://docs.google.com/viewer?url=https://www.dpp.gov.bd/upload_file/gazettes/14212_75510.pdf&embedded=true" frameBorder="0"/>
                </Container>
            </Fragment>
        );
    }
}

export default labourLaw;