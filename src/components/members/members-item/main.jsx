import React from 'react'
import './style.css'
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { FiMail } from 'react-icons/fi'

function MItem(props) {
    return (
        <div className="element-item">
            <div className="m-item">
                <img src={props.pic} alt="" />
                <h2 className="item-name">{props.name}</h2>
                <p>{props.job}</p>
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
        </div>
    )
}

export default MItem