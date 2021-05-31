import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './header.css'
import Button from '../button/button.jsx'
import { IconButton } from '@material-ui/core';
import { BsX } from "react-icons/bs";
import { RiMenu4Fill } from "react-icons/ri";

import Logo from '../../photos/Logos/cloud.png'

import { HashLink as Link } from 'react-router-hash-link'

function Header({ open, setOpen }) {
    const handleOpen = () => setOpen(prev => !prev)

    return (
        <div className="header" id="home">
            <div className="container">
                <div className="navigation">
                    <Router>
                        <div className="logo">
                            <Link smooth to="#asosiy">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>

                        <div className="navbar">
                            <ul>
                                <li>
                                    <Link smooth to="#xizmatlar">Xizmatlar</Link>
                                </li>
                                <li>
                                    <Link smooth to="#imkoniyatlar">Imkoniyatlar</Link>
                                </li>
                                <li>
                                    <Link smooth to="#jamoa" >Jamoa</Link>
                                </li>
                                <li>
                                    <Link smooth to="/blog">Blog</Link>
                                </li>

                            </ul>

                            <div className="started">
                                <Link smooth to="#bog'lanish">
                                    <Button name="get-started" text="Bog'lanish" />
                                </Link>
                            </div>
                        </div>
                    </Router>

                    <div className="header-mobile"  >
                        {
                            open
                                ? <IconButton size="small" onClick={handleOpen}>
                                    <BsX />
                                </IconButton>
                                : <IconButton size="small" onClick={handleOpen} >
                                    <RiMenu4Fill />
                                </IconButton>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header