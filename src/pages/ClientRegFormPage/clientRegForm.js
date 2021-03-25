import React, {Component, Fragment} from 'react';
import ClientReg from "./../../components/ClientRegForm/clientRegForm";

class ClientRegForm extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <ClientReg/>
            </Fragment>
        );
    }
}

export default ClientRegForm;