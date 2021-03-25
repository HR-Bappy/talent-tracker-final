import React, {Component, Fragment} from 'react';
import AboutTalentTracker from "./../../components/AboutTalentTracker/AboutTalentTracker";

class AboutTalentTrackerPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <AboutTalentTracker/>
            </Fragment>
        );
    }
}

export default AboutTalentTrackerPage;