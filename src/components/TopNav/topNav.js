import React, { Component,Fragment } from 'react';
import './../../asset/css/custom.css';
import './../../asset/css/responsive.css';
import {Navbar,Nav} from 'react-bootstrap';
import TalentTrackerlogoimg from './../../asset/images/talent-tracker-logo.webp';
import {Link} from "react-router-dom";


class topNav extends Component {
    render() {
        return  (
            <Fragment>
                <Navbar className="topNav__bg" collapseOnSelect expand="lg"  variant="dark">
                <Navbar.Brand><Link to="/"><img className="topNav__logoImg" src={TalentTrackerlogoimg} alt="Logo" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    
                    </Nav>
                    <Nav>
                        <Nav.Link> <Link exact activeStyle={{color:'#b9d056'}} className="topNav__navItem" to="/">HOME</Link> </Nav.Link>
                        <Nav.Link> <Link exact activeStyle={{color:'#b9d056'}} className="topNav__navItem" to="/service">SERVICE</Link> </Nav.Link>
                        <a href="#" class="nav-link" role="button"> <a class="topNav__navItem" href="https://halcyonbd.com/talent/joblist">AVALABLE JOBS</a> </a>
                        <a href="#" class="nav-link" role="button"> <a class="topNav__navItem" href="https://halcyonbd.com/talent/traininglist">TRAINING</a> </a>
                        {/* <Nav.Link> <Link exact activeStyle={{color:'#b9d056'}} className="topNav__navItem" to="/training">TRAINING</Link> </Nav.Link> */}
                        <Nav.Link> <Link exact activeStyle={{color:'#b9d056'}} className="topNav__navItem" to="/labourLaw">LABOUR LAW</Link> </Nav.Link>
                        <a href="#" className="nav-link" role="button"> <a className="topNav__navItem" href="http://talentracker.com.bd/blog/?fbclid=IwAR0EN6ouFdiCqFKDbxdg80d8D9RAtqHgn1uz86WHJ9tzdHftKxIM9BFOb0I">BLOG</a> </a>
                        <Nav.Link> <Link exact activeStyle={{color:'#b9d056'}} className="topNav__navItem" to="/loginAndReg">LOGIN/REGISTRATION</Link> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}



export default topNav;