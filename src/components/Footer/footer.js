import React, { Component, Fragment } from 'react';
import Facebook from './../../asset/images/socialIcons/facebook.png';
import Linkedin from './../../asset/images/socialIcons/linkedin.png';
import Pinterest from './../../asset/images/socialIcons/pinterest.png';
import Twitter from './../../asset/images/socialIcons/twitter.png';
import Youtube from './../../asset/images/socialIcons/youtube.png';

class footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="footer__area">
                    <div> 
                        <p className="footer__copyRight">copyright &copy; 2020 talent tracker </p> 
                    </div>

                    <div> 
                        <ul className="footer__socialIcons--area">
                            <li><a href=""><img src={Facebook} alt="social-icons" /></a></li>
                            <li><a href=""><img src={Twitter} alt="social-icons" /></a></li>
                            <li><a href=""><img src={Youtube} alt="social-icons" /></a></li>
                            <li><a href=""><img src={Pinterest} alt="social-icons" /></a></li>
                            <li><a href=""><img src={Linkedin} alt="social-icons" /></a></li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default footer;