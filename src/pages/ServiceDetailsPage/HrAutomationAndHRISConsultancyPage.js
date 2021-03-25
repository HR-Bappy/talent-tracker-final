import React, {Component, Fragment} from 'react';
import HrAutomationAndHrisConsultancy from "../../components/ServicesDetails/HrAutomationAndHRISConsultancy";

class HrAutomationAndHrisConsultancyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <HrAutomationAndHrisConsultancy/>
            </Fragment>
        );
    }
}

export default HrAutomationAndHrisConsultancyPage;