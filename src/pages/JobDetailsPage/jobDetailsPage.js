import React, {Component, Fragment} from 'react';
import JobDetails from "../../components/JobDetails/jobDetails";

class JobDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <JobDetails/>
            </Fragment>
        );
    }
}

export default JobDetailsPage;