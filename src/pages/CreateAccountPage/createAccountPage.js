import React, {Component, Fragment} from 'react';
import CreateAccount from "../../components/CreateAccount/createAccount";

class CreateAccountPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <CreateAccount/>
            </Fragment>
        );
    }
}

export default CreateAccountPage;