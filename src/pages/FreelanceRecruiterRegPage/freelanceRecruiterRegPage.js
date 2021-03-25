import React, { Component } from 'react';
import { Fragment } from 'react';
import FreelanceRecruiterReg from "./../../components/FreelanceRecruiterReg/freelanceRecruiterReg";

class freelanceRecruiterRegPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <FreelanceRecruiterReg/>
            </Fragment>
        );
    }
}

export default freelanceRecruiterRegPage;