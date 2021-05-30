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
                        <a href="/home">
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    <Router>
                        <div className="navbar">
                            <ul>


                                <li>
                                    <Link smooth to="#xizmatlar">Xizmatlar</Link>
                                </li>
                                <li>
                                    <Link smooth to="#imkoniyatlar">Imkoniyatlar</Link>
                                </li>
                                <li>
                                    <Link smooth to="#team" >Jamoa</Link>
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
                                ? <IconButton size="small" onClick={handleClose}>
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