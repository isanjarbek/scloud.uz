import React from 'react'
import './style.css'
import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi'

function MItem(props) {
    return (
        <div className="element-item">
            <div className="m-item">
                <img src={props.pic} alt="" />
                <h2 className="item-name">{props.name}</h2>
                <p>{props.job}</p>
                <div className="icon-social">
                    <a href={props.facebook} target="_blank" rel="noreferrer">
                        <div className="icon">
                            <FaFacebookF className="fa-icon" />
                        </div>
                    </a>
                    <a href={props.instagram} target="_blank" rel="noreferrer">
                        <div className="icon">
                            <FaInstagram className="fa-icon" />
                        </div>
                    </a>
                    <a href={props.telegram} target="_blank" rel="noreferrer">
                        <div className="icon">
                            <FaTelegramPlane className="fa-icon" />
                        </div>
                    </a>
                    <a href={props.gamil} target="_blank" rel="noreferrer">
                        <div className="icon">
                            <FiMail className="fa-icon" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MItem