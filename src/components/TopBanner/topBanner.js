import React, { Component,Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

class topBanner extends Component {
    render() {
        return (
            <Fragment>
                <div className="topBanner__bg">
                    <Container>
                        <div className="topBanner__desSection">
                            <p className="topBanner__title">TalentTracker Limited</p>
                            <p className="topBanner__subTitle">Creating shared experiences !!</p>
                        </div>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default topBanner;