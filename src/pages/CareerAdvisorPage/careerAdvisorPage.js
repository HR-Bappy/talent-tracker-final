import React, { Component } from 'react';
import { Fragment } from 'react';
import CareerAdvisor from "./../../components/CareerAdvisor/careerAdvisor";

class carrerAdvisorPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <CareerAdvisor/>
            </Fragment>
        );
    }
}

export default carrerAdvisorPage;