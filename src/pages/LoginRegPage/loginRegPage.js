import React, {Component, Fragment} from 'react';
import LoginReg from "../../components/LoginRegistration/loginRegistration";

class LoginRegPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <LoginReg/>
            </Fragment>
        );
    }
}

export default LoginRegPage;