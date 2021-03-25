import React, {Component, Fragment} from 'react';
import ConsultantAndCareerAdvisorReg from "../../components/Consultant&CareerAdvisorReg/consultantAndCareerAdvisorReg";

class ConsultantAndCareerAdvisorRegPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <ConsultantAndCareerAdvisorReg/>
            </Fragment>
        );
    }
}

export default ConsultantAndCareerAdvisorRegPage;