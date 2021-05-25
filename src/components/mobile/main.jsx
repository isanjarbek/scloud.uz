import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '../button/button'
import './style.css'

function Mobile() {
    return (
        <div className="mobile-page">
            <div className="container">
                <div className="mobile-elements">
                        <Router>
                            <div className="mobile-navbar">
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Features</Link>
                                    </li>
                                    <li>
                                        <Link to="/team">Team</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>

                                <Switch>
                                    <Route path="/about">
                                        
                                    </Route>
                                    <Route path="/services">

                                    </Route>
                                    <Route path="/team">

                                    </Route>
                                    <Route path="/blog">

                                    </Route>
                                    <Route path="/contact">

                                    </Route>
                                    <Route path="/">

                                    </Route>
                                </Switch>
                                <div className="started">
                                    <Button name="started-now" text="Get Started" />
                                </div>
                            </div>
                        </Router>
                </div>
            </div>
        </div>
    )
}

export default Mobile