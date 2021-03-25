import React, {Component, Fragment} from 'react';
import Connect from "../../components/Connect/connect";

class ConnectPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <Connect/>
            </Fragment>
        );
    }
}

export default ConnectPage;