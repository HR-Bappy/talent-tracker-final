import React, {Component, Fragment} from 'react';
import TopBanner from "./../../components/TopBanner/topBanner";
import AboutUs from "./../../components/About/about";
import ManagementTeam from "./../../components/ManagementTeam/managementTeam";
import Clients from "./../../components/Clients/clients";
import Services from "./../../components/Services/services";
import ConsultantAndCareerAdvisor from "../../components/ConsultantAndCareerAdvisor/consultantAndCareerAdvisor";
import FreelanceRecruiter from "./../../components/FreelanceRecruiter/freelanceRecruiter";


class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopBanner/>
                <AboutUs/>
                <ManagementTeam/>
                <Clients/>
                <Services/>
                <ConsultantAndCareerAdvisor/>
                <FreelanceRecruiter/>
            </Fragment>
        );
    }
}

export default HomePage;