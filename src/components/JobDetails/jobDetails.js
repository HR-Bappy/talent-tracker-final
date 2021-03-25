import React, { Component, Fragment } from 'react';
import { Container,Button } from 'react-bootstrap';

class jobDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <p className="pageSection__title pt-5">Job Details</p>
                    <p className="greyBar"></p>
                    <p className="mt-5 jobDetails__title">Job Title :</p>
                    <p className="jobDetails__des">Category :</p>
                    <p className="jobDetails__des">Vacancy :</p>
                    <p className="jobDetails__des">Salary Range :</p>

                    <iframe className="mt-5 jobDetails__pdfViewer" src="https://docs.google.com/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true" frameBorder="0"></iframe>

                    <div className="text-center mt-5">
                        <Button className="grdiantBtn jobDetails__btn" type="submit"> Apply Now </Button>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default jobDetails;