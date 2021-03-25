import React, {Component, Fragment} from 'react';
import LabourLaw from "../../components/LabourLaw/labourLaw";

class LabourLawPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <LabourLaw/>
            </Fragment>
        );
    }
}

export default LabourLawPage;