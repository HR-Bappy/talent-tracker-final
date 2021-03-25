import React, {Component, Fragment} from 'react';
import ExpatriateAffairsManagement from "../../components/ServicesDetails/ExpatriateAffairsManagement";

class ExpatriateAffairsManagementPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <ExpatriateAffairsManagement/>
            </Fragment>
        );
    }
}

export default ExpatriateAffairsManagementPage;