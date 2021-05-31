import React from 'react'
import './main.css'
// import { AiOutlineClose } from "react-icons/ai"; 
import { IconButton } from '@material-ui/core';


const ModalWindow = props => {

    // if (isOpened) {
    //     document.body.style.overflow = "hidden"
    // }
    // else {
    //     document.body.style.overflow = "unset"

    // }
    return (
        <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`} style={{ ...props.style }} onClick={props.onModalClose} >
            <div className="modal_body">
                <div className="modal_close" onClick={props.onModalClose}>
                    <IconButton>×</IconButton>
                </div>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                {props.children}
            </div>
        </div>
    )

}
export default ModalWindow
