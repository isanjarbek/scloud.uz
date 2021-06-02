import React from 'react'
import './main.css'
import { IconButton } from '@material-ui/core';

const ModalWindow = props => {

    if (props.isOpened) {
        document.body.style.overflow = "hidden"
    }
    else {
        document.body.style.overflow = "unset"

    }
    return (
        <>
            <div className={`modal_body ${props.isOpened ? 'modal_body open' : 'modal_body close'}`}>
                <div className="modal_close" >
                    <IconButton onClick={props.onModalClose}>×</IconButton>
                </div>
                <h2 className="title">{props.title}</h2>
                <p className="text">{props.text}</p>
                {props.children}
            </div>
            {props.isOpened ?
                <div className="modal__wrapper" onClick={props.onModalClose}></div> : ""
            }
        </>
    )
}
export default ModalWindow
