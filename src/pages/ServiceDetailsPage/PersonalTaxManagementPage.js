import React, {Component, Fragment} from 'react';
import PersonalTaxManagement from "../../components/ServicesDetails/PersonalTaxManagement";

class PersonalTaxManagementPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <PersonalTaxManagement/>
            </Fragment>
        );
    }
}

export default PersonalTaxManagementPage;