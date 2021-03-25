import React, {Component, Fragment} from 'react';
import TrainingDetails from "../../components/TrainingDetails/trainingDetails";

class TrainingDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TrainingDetails/>
            </Fragment>
        );
    }
}

export default TrainingDetailsPage;