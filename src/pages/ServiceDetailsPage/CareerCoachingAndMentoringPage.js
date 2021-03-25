import React, {Component, Fragment} from 'react';
import TopNav from "../../components/TopNav/topNav";
import BusinessSupportServices from "../../components/ServicesDetails/BusinessSupportServices";
import Contact from "../../components/Contact/contact";
import Footer from "../../components/Footer/footer";
import CareerCoachingAndMentoring from "../../components/ServicesDetails/CareerCoachingAndMentoring";

class CareerCoachingAndMentoringPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <CareerCoachingAndMentoring/>
            </Fragment>
        );
    }
}

export default CareerCoachingAndMentoringPage;