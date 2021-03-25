import React, {Component, Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import HomePage from "../pages/HomePage/homePage";
import AvailableJobsPage from "./../pages/AvailableJobsPage/avaiableJobsPage";
import TrainingPage from "../pages/TrainingPage/trainingPage";
import LabourLawPage from "../pages/LabourLawPage/labourLawPage";
import LoginRegPage from "../pages/LoginRegPage/loginRegPage";
import ServiceSectionPage from "../pages/ServiceSectionPage/serviceSectionPage";
import ConsultantAndCareerAdvisorRegPage from "../pages/ConsultantAndCareerAdvisorRegPage/consultantAndCareerAdvisorRegPage";
import CareerAdvisorPage from "./../pages/CareerAdvisorPage/careerAdvisorPage";
import ClientRegForm from "../pages/ClientRegFormPage/clientRegForm";
import ConnectPage from "../pages/ConnectPage/connectPage";
import CreateAccountPage from "../pages/CreateAccountPage/createAccountPage";
import FreelanceRecruiterRegPage from "./../pages/FreelanceRecruiterRegPage/freelanceRecruiterRegPage";
import JobDetailsPage from "../pages/JobDetailsPage/jobDetailsPage";
import hrServicePage from "./../pages/ServiceDetailsPage/hrServicePage"
import TrainingDetailsPage from "../pages/TrainingDetailsPage/trainingDetailsPage";
import ConsultantPage from "./../pages/ConsultantPage/consultantPage";
import HrAndPayrollOutsourcingPage from "./../pages/ServiceDetailsPage/HrAndPayrollOutsourcingPage";
import TalentSearchAndOutplacementPage from "../pages/ServiceDetailsPage/TalentSearchAndOutplacementPage";
import HrConsultancyServicesPage from "../pages/ServiceDetailsPage/HrConsultancyServicesPage";
import CareerCoachingAndMentoringPage from "../pages/ServiceDetailsPage/CareerCoachingAndMentoringPage";
import TrainingAndDevelopmentPage from "../pages/ServiceDetailsPage/TrainingAndDevelopmentPage";
import HrAutomationAndHrisConsultancyPage from "../pages/ServiceDetailsPage/HrAutomationAndHRISConsultancyPage";
import EmployeeBenefitSchemeDesignAndApprovalPage from "../pages/ServiceDetailsPage/EmployeeBenefitSchemeDesignAndApprovalPage";
import BusinessSupportServicesPage from "../pages/ServiceDetailsPage/BusinessSupportServicesPage";
import ExpatriateAffairsManagementPage from "../pages/ServiceDetailsPage/ExpatriateAffairsManagementPage";
import LicensingServicesPage from "../pages/ServiceDetailsPage/LicensingServicesPage";
import PersonalTaxManagementPage from "../pages/ServiceDetailsPage/PersonalTaxManagementPage";
import AboutTalentTrackerPage from "./../pages/AboutTalentTrackerPage/AboutTalentTrackerPage";

import TopNav from "../components/TopNav/topNav";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <TopNav/>
                <Switch>                
                    <Route exact path ="/" component={HomePage}/>
                    <Route exact path ="/service" component={ServiceSectionPage}/>
                    <Route exact path ="/availableJobs" component={AvailableJobsPage}/>
                    <Route exact path ="/training" component={TrainingPage}/>
                    <Route exact path ="/labourLaw" component={LabourLawPage}/>
                    <Route exact path ="/loginAndReg" component={LoginRegPage}/>
                    <Route exact path ="/ConsultantAndCareerAdvisorRegPage" component={ConsultantAndCareerAdvisorRegPage}/>
                    <Route exact path ="/CareerAdvisorPage" component={CareerAdvisorPage}/>
                    <Route exact path ="/ClientRegForm" component={ClientRegForm}/>
                    <Route exact path ="/ConnectPage" component={ConnectPage}/>
                    <Route exact path ="/CreateAccountPage" component={CreateAccountPage}/>
                    <Route exact path ="/JobDetailsPage" component={JobDetailsPage}/>
                    <Route exact path ="/hrServicePage" component={hrServicePage}/>
                    <Route exact path ="/FreelanceRecruiterRegPage" component={FreelanceRecruiterRegPage}/>
                    <Route exact path ="/TrainingDetailsPage" component={TrainingDetailsPage}/>
                    <Route exact path ="/ConsultantPage" component={ConsultantPage}/>
                    <Route exact path ="/HrAndPayrollOutsourcingPage" component={HrAndPayrollOutsourcingPage}/>
                    <Route exact path ="/TalentSearchAndOutplacementPage" component={TalentSearchAndOutplacementPage}/>
                    <Route exact path ="/HrConsultancyServicesPage" component={HrConsultancyServicesPage}/>
                    <Route exact path ="/CareerCoachingAndMentoringPage" component={CareerCoachingAndMentoringPage}/>
                    <Route exact path ="/TrainingAndDevelopmentPage" component={TrainingAndDevelopmentPage}/>
                    <Route exact path ="/HrAutomationAndHrisConsultancyPage" component={HrAutomationAndHrisConsultancyPage}/>
                    <Route exact path ="/EmployeeBenefitSchemeDesignAndApprovalPage" component={EmployeeBenefitSchemeDesignAndApprovalPage}/>
                    <Route exact path ="/BusinessSupportServicesPage" component={BusinessSupportServicesPage}/>
                    <Route exact path ="/ExpatriateAffairsManagementPage" component={ExpatriateAffairsManagementPage}/>
                    <Route exact path ="/LicensingServicesPage" component={LicensingServicesPage}/>
                    <Route exact path ="/PersonalTaxManagementPage" component={PersonalTaxManagementPage}/>
                    <Route exact path ="/AboutTalentTrackerPage" component={AboutTalentTrackerPage}/>
                </Switch>
                
                <Contact/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AppRoute;