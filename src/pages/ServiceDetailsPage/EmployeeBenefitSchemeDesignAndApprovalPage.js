import React, {Component, Fragment} from 'react';
import EmployeeBenefitSchemeDesignAndApproval
    from "../../components/ServicesDetails/EmployeeBenefitSchemeDesignAndApproval";

class EmployeeBenefitSchemeDesignAndApprovalPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <EmployeeBenefitSchemeDesignAndApproval/>
            </Fragment>
        );
    }
}

export default EmployeeBenefitSchemeDesignAndApprovalPage;