import React, {Component, Fragment} from 'react';

import AvailableAllJobs from "./../../components/AvailableJobs/availableJobs";

class availableJobsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <AvailableAllJobs/>
            </Fragment>
        );
    }
}

export default availableJobsPage;