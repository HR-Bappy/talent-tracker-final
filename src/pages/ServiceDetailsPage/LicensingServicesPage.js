import React, {Component, Fragment} from 'react';
import LicensingServices from "../../components/ServicesDetails/LicensingServices";

class LicensingServicesPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <LicensingServices/>
            </Fragment>
        );
    }
}

export default LicensingServicesPage;