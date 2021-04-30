import React from 'react';
import { FaPhone ,FaFax , FaEnvelope ,FaFacebook , FaLinkedin ,FaGooglePlusG,FaTwitter ,FaYoutube , } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer (props){
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    
                    <div className="col-lg-3 col-sm-6">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li> <Link to='/home'> Home </Link> </li>
                            <li><Link to='/aboutus'>About Us </Link> </li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            
                            <FaPhone /> : +852 1234 5678<br />
                            <FaFax /> : +852 8765 4321<br />
                            <FaEnvelope /> : <a href="mailto:confusion@food.net">
                                confusion@food.net</a>
                        </address>
                    </div>
                
                    <div className="col-lg-3 col-md-6 col-sm-12 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+">
                                <FaGooglePlusG /> </a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">
                                <FaFacebook /> </a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/">
                                <FaLinkedin /></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                                <FaTwitter /></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/">
                                <FaYoutube/></a>
                            <a className="btn btn-social-icon" href="mailto:">
                                <FaEnvelope /> </a>
                        </div>
                    </div> 
                </div>

                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2018 Ristorante Con Fusion</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;