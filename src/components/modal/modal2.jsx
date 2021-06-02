import React from 'react'
import { IconButton } from '@material-ui/core'
import './modal2.css'

const Modal2 = props => {
    if (props.isOpened) {
        document.body.style.overflow = "hidden"
    }
    else {
        document.body.style.overflow = "unset"

    }
    return (
        // <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`}
        //     style={{ ...props.style }} onClick={props.onModalClose}>
        //     <div className="modal_body body2">
        //         <div className="modal_close" onClick={props.onModalClose}>
        //             <IconButton>×</IconButton>
        //         </div>
        //         <div className="modal-elements">
        //             <div className="left-content">
        //                 <h2>{props.cours}</h2>
        //                 <p>{props.txt}</p>
        //                 <button className="content-button">Start</button>
        //             </div>
        //             <div className="right-content">
        //                 <img src={props.image} alt="" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className={`modal_body body2 ${props.isOpened ? 'modal_body open' : 'modal_body close'}`}>
                <div className="modal_close" >
                    <IconButton onClick={props.onModalClose}>×</IconButton>
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
            {props.isOpened
                ?
                <div className="modal__wrapper" onClick={props.onModalClose} ></div>
                : ""
            }
        </>
    )
}
export default Modal2