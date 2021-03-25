import React, { Component,Fragment } from 'react';
import { Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

class freelanceRecruiter extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <p className="freelance__title">Freelance Recruiter</p>
                    <p className="greyBar"></p>
                    <p className="freelance__des mt-5">
                    This is platform created by TalenTracker with an aim to facilitate professionals and individuals to
                    exercise their people understanding and sourcing skills. Under this platform, Recruiters’ will be able to
                    create their profile with TalenTracker website and recommend candidates’ profiles from their own
                    network or sourcing against specific job openings. Recruiters’ have to screen profiles at their own
                    matching with the specific job and upload in the internal portal of TalenTracker.
                    <br /><br />
                    Recruiters will be eligible for financial reward at a certain rate if their recommended candidates are
                    hired against the specific job.    
                    </p>
                    <Link to="/FreelanceRecruiterRegPage">
                        <button className="talentTracker__btn freelance__btn mt-5 mb-5">join us</button>
                    </Link>
                </Container>
            </Fragment>
        );
    }
}

export default freelanceRecruiter;