import React from 'react'
import { IconButton } from '@material-ui/core'
import './modal2.css'

const Modal2 = props => {
    return (
        <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`}
            style={{ ...props.style }} onClick={props.onModalClose}>
            <div className="modal_body body2">
                <div className="modal_close" onClick={props.onModalClose}>
                    <IconButton>×</IconButton>
                </div>
                <div className="modal-elements">
                    <div className="left-content">
                        <h2>{props.cours}</h2>
                        <p>{props.txt}</p>
                        <button className="content-button">Start</button>
                    </div>
                    <div className="right-content">
                        <img src={props.image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal2