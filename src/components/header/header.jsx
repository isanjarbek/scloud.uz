import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './header.css'
import Button from '../button/button.jsx'
import { IconButton } from '@material-ui/core';
import { BsListNested, BsX } from "react-icons/bs";

import Logo from '../../photos/logo.png'

function Header({ open, setOpen }) {

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="header">
            <div className="container">
                <div className="navigation">
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <div className="text-logo">
                            Grow<span className="text-logo-color">Be</span>
                        </div>
                    </div>
                    <Router>
                        <div className="navbar">
                            <ul>
                                <li>
                                    <Link to="/" >Home</Link>
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
                                    <Link to="/team" >Team</Link>
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
                                <Route path="/contact" >

                                </Route>
                                <Route path="/">

                                </Route>
                            </Switch>
                            <div className="started">
                                <Button name="get-started" text="Get Started" />
                            </div>
                        </div>
                    </Router>

                    <div className="header-mobile"  >
                        {
                            open
                                ? <IconButton size="small" onClick={handleClose}>
                                    <BsX />
                                </IconButton>
                                : <IconButton size="small" onClick={handleOpen} >
                                    <BsListNested />
                                </IconButton>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header