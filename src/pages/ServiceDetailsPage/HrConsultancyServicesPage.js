import React, {Component, Fragment} from 'react';
import HrConsultancyServices from "../../components/ServicesDetails/HrConsultancyServices";

class HrConsultancyServicesPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <HrConsultancyServices/>
            </Fragment>
        );
    }
}

export default HrConsultancyServicesPage;