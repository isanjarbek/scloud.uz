import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Logo from '../../photos/Logos/cloud.png'
import './style.css'

import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhoneCall } from 'react-icons/fi'
import { GrLocation } from "react-icons/gr";
import { HashLink as Link } from 'react-router-hash-link'


function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-elements">
                    <div className="footer-item footer-logo">
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <p>
                            Biznesni rivojlantirish, savdoni oshirish uchun optimal yechimlar. Ishni avtomatlashtirish uchun takliflar.
                        </p>
                        <div className="icon-social">
                            <a href="#" target="_blank" rel="noreferrer">
                                <div className="icon">
                                    <FaFacebookF className="fa-icon" />
                                </div>
                            </a>
                            <a href="https://www.instagram.com/cloudsolution.uz/" target="_blank" rel="noreferrer">
                                <div className="icon">
                                    <FaInstagram className="fa-icon" />
                                </div>
                            </a>
                            <a href="https://t.me/Cloud_minds" target="_blank" rel="noreferrer">
                                <div className="icon">
                                    <FaTelegramPlane className="fa-icon" />
                                </div>
                            </a>
                            <a href="https://www.youtube.com/channel/UCWr5PfxWcBPMIUi51jAI9tQ" target="_blank">
                                <div className="icon">
                                    <FaYoutube className="fa-icon" />
                                </div>
                            </a>
                            <a href="mailto:csolution.uz@gmail.com" rel="noreferrer">
                                <div className="icon">
                                    <FiMail className="fa-icon" />
                                </div>
                            </a>


                        </div>

                    </div>
                    <div className="footer-item footer-company">
                        <h2>Bizning jamoa</h2>
                        <ul>
                            <Router>
                                <li>Biz haqimizda</li>
                                <li><Link smooth to="#xizmatlar">Xizmatlar</Link></li>
                                <li><Link smooth to="#imkoniyatlar">Imkoniyatlar</Link></li>
                                <li> <Link smooth to="#jamoa" >Bizning jamoa</Link></li>
                                <li>Yangiliklar</li>
                            </Router>
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
                            <li>
                                <span className="connecting" ><FiMail />Gmail:</span>
                                <a href="mailto:csolution.uz@gmail.com" target="_blank" rel="noreferrer">Cloudsolution@gmail.com </a>
                            </li>
                            <li >
                                <span className="connecting" ><FiPhoneCall />Bog'lanish:</span>
                                <a href="tel:+998 97 346 88 87" target="_blank" rel="noreferrer"> +998 97 346 88 87</a>
                            </li>
                            <li><span className="connecting"><GrLocation />Manzil:</span>
                                <a href="https://maps.google.com/maps?q=41.326406,69.230060&ll=41.326406,69.230060&z=16" target="_blank" rel="noreferrer"> Toshkent, Olmazor t. Beruniy ko'chasi 2B </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-end">
                    <p>Copyright © Cloud Solution 2021. All Rights Reserved. Powered by "Less is More"</p>
                </div>
            </div>
        </div>
    )
}

export default Footer