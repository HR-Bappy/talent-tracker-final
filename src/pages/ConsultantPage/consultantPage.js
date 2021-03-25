import React, {Component, Fragment} from 'react';
import Consultant from "../../components/Consultant/consultant";

class ConsultantPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <Consultant/>
            </Fragment>
        );
    }
}

export default ConsultantPage;