import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from '../button/button'
import './style.css'
import { HashLink as Link } from 'react-router-hash-link'


function Mobile({ setOpen }) {

    const handleOpen = () => setOpen(prev => !prev)

    return (
        <div className="mobile-page">
            <div className="container">
                <div className="mobile-elements">
                    <Router>
                        <div className="mobile-navbar">
                            <ul>
                                <li onClick={handleOpen}>
                                    <Link smooth to="#asosiy"  >Asosiy</Link>
                                </li>
                                <li onClick={handleOpen}>
                                    <Link smooth to="#xizmatlar">Xizmatlar</Link>
                                </li>
                                <li onClick={handleOpen}>
                                    <Link smooth to="#imkoniyatlar"  >Imkoniyatlar</Link>
                                </li>
                                <li onClick={handleOpen}>
                                    <Link smooth to="#jamoa" >Jamoa</Link>
                                </li>
                                <li onClick={handleOpen}>
                                    <Link smooth to="#blog" >Blog</Link>
                                </li>

                            </ul>

                            {/* <Switch>
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
                            </Switch> */}
                            <Link smooth to="#bog'lanish" >
                                <div className="mobile-btn" onClick={handleOpen}>
                                    <Button name="started-now" text="Bog'lanish" />
                                </div>
                            </Link>
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default Mobile