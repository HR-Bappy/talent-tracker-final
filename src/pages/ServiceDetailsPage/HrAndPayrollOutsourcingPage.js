import React, {Component, Fragment} from 'react';
import HrAndPayroll from "../../components/ServicesDetails/HrAndPayrollOutsourcing";
class HrAndPayrollOutsourcingPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <HrAndPayroll/>
            </Fragment>
        );
    }
}

export default HrAndPayrollOutsourcingPage;