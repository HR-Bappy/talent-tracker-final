import React, {Component, Fragment} from 'react';
import HrService from "../../components/ServicesDetails/hrService";

class HrServicePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <HrService/>
            </Fragment>
        );
    }
}

export default HrServicePage;