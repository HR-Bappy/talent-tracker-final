import React, {Component, Fragment} from 'react';
import TrainingAndDevelopment from "../../components/ServicesDetails/TrainingAndDevelopment";

class TrainingAndDevelopmentPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <TrainingAndDevelopment/>
            </Fragment>
        );
    }
}

export default TrainingAndDevelopmentPage;