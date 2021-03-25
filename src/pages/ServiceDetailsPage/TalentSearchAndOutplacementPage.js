import React, {Component, Fragment} from 'react';
import TalentSearchAndOutplacement from "../../components/ServicesDetails/TalentSearchAndOutplacement";

class TalentSearchAndOutplacementPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>
                <TalentSearchAndOutplacement/>
            </Fragment>
        );
    }
}

export default TalentSearchAndOutplacementPage;