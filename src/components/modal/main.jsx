import React, { useState } from 'react'
import './main.css'
import { IconButton } from '@material-ui/core';

const ModalWindow = props => {

    // if (isOpened) {
    //     document.body.style.overflow = "hidden"
    // }
    // else {
    //     document.body.style.overflow = "unset"

    // }
    const [modal, setModal] = useState(true)
    return (
        <>
            {
                modal ?

                    <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`} style={{ ...props.style }}
                        onClick={props.onModalClose} 
                        >
                        <div className="modal_body">
                            <div className="modal_close" >
                                <IconButton onClick={props.onModalClose}>×</IconButton>
                            </div>
                            <h2>{props.title}</h2>
                            <p>{props.text}</p>
                            {props.children}
                        </div>
                    </div>
                    : <div className="modalinfo"  onClick={props.onModalClose}>
                        
                      </div>
            }
        </>
    )
}
export default ModalWindow
