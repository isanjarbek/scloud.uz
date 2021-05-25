import React from 'react'
import Logo from '../../photos/logo.png'
import './style.css'

import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-elements">
                    <div className="footer-item footer-logo">
                        <div className="logo">
                            <img src={Logo} alt="" />
                            <div className="text-logo">
                                Grow<span className="text-logo-color">Be</span>
                            </div>
                        </div>
                        <p>
                            Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate business through revolutionary.
                        </p>
                        <div className="icon-social">
                            <Router>
                                <Link to="/facebook">
                                    <div className="icon">
                                        <FaFacebookF className="fa-icon" />
                                    </div>
                                </Link>
                                <Link to="/instagram">
                                    <div className="icon">
                                        <FaInstagram className="fa-icon" />
                                    </div>
                                </Link>
                                <Link to="/telegram">
                                    <div className="icon">
                                        <FaTelegramPlane className="fa-icon" />
                                    </div>
                                </Link>
                                <Link to="/gmail">
                                    <div className="icon">
                                        <FiMail className="fa-icon" />
                                    </div>
                                </Link>

                                <Switch>
                                    <Route path="/facebook">

                                    </Route>
                                    <Route path="/instagram">

                                    </Route>
                                    <Route path="/telegram">

                                    </Route>
                                    <Route path="/gmail">

                                    </Route>
                                </Switch>
                            </Router>
                        </div>

                    </div>
                    <div className="footer-item footer-company">
                        <h2>Our Company</h2>
                        <ul>
                            <li>About Us</li>
                            <li> Our Services</li>
                            <li>Our Plan</li>
                            <li>Our Team</li>
                            <li>Latest News</li>
                        </ul>
                    </div>
                    <div className="footer-item footer-services">
                        <h2>Our Services</h2>
                        <ul>
                            <li>Digital Marketing </li>
                            <li>SEO Optimazation</li>
                            <li>Web Development</li>
                            <li>Link Building </li>
                            <li>Terms & Privacy</li>
                        </ul>
                    </div>
                    <div className="footer-item footer-contact">
                        <h2>Contact Us</h2>
                        <ul>
                            <li><span className="connecting">Email:</span> growbeinfo@gmail</li>
                            <li><span className="connecting">Phone:</span> +324-9332-5018</li>
                            <li><span className="connecting">Location:</span> 1370 Orvilly Rot APT, New York, USA</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-end">
                    <p>Copyright © GrowBe 2021. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer