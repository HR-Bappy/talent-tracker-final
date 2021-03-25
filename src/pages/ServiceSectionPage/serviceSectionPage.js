import React, {Component, Fragment} from 'react';
import Services from "../../components/Services/services";

class ServiceSectionPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <div className="service-page">
                 <Services/>
                </div>
            </Fragment>
        );
    }
}

export default ServiceSectionPage;