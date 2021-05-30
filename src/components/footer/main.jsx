import React from 'react'
import Logo from '../../photos/Logos/cloud.png'
import './style.css'

import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { FiMail, FiPhoneCall } from 'react-icons/fi'
import { GrLocation } from "react-icons/gr";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-elements">
                    <div className="footer-item footer-logo">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <p>
                            Biznesni rivojlantirish, savdoni oshirish uchun optimal yechimlar. Ishni avtomatlashtirish uchun takliflar.
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
                            <li>Biz haqimizda</li>
                            <li> Xizmatlarimiz</li>
                            <li>Maqsadimiz</li>
                            <li>Bizning jamoa</li>
                            <li>Yangiliklar</li>
                        </ul>
                    </div>
                    <div className="footer-item footer-services">
                        <h2>Xizmatlarimiz</h2>
                        <ul>
                            <li>Veb ilovalar </li>
                            <li>Mobil ilovalar </li>
                            <li>Ma'lumotlar tahlili </li>
                            <li>Raqamli marketing </li>
                            <li>Terms & Privacy</li>
                        </ul>
                    </div>
                    <div className="footer-item footer-contact">
                        <h2>Biz bilan bog'lanish</h2>
                        <ul>
                            <li><span className="connecting"><FiMail />Gmail:</span> Cloudsolution@gmail.com </li>
                            <li><span className="connecting"><FiPhoneCall />Bog'lanish:</span> +998 97 346 88 87</li>
                            <li><span className="connecting"><GrLocation />Manzil:</span> Toshkent, Olmazor t. Beruniy ko'chasi 2B</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-end">
                    <p>Copyright © GrowBe 2021. All Rights Reserved.      Powered by "Less is More"</p>
                </div>
            </div>
        </div>
    )
}

export default Footer