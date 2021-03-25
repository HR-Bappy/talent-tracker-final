import React, {Component, Fragment} from 'react';
import BusinessSupportServices from "../../components/ServicesDetails/BusinessSupportServices";

class BusinessSupportServicesPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <BusinessSupportServices/>
            </Fragment>
        );
    }
}

export default BusinessSupportServicesPage;