import React, { Component, Fragment } from 'react';
import { Container,Button } from 'react-bootstrap';

class trainingDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <p className="pageSection__title pt-5">Training Details</p>
                    <p className="greyBar"></p>
                    <p className="mt-5 jobDetails__title">Training Title :</p>
                    <p className="jobDetails__des">Training Category :</p>
                    <p className="jobDetails__des">Name of Trainer :</p>
                    <p className="jobDetails__des">Designation of Trainer :</p>

                    <iframe className="mt-5 jobDetails__pdfViewer" src="https://docs.google.com/viewer?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true" frameBorder="0"/>

                    <div className="text-center mt-5">
                        <Button className="grdiantBtn jobDetails__btn" type="submit"> register now </Button>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default trainingDetails;