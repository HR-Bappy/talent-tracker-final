import React, {Component, Fragment} from 'react';
import Training from "../../components/Training/training";

class TrainingPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <Training/>
            </Fragment>
        );
    }
}

export default TrainingPage;