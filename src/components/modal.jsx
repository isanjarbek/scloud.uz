import React from 'react'
import { useAlert } from '../context'
import './style.css'
import { IoClose } from "react-icons/io5";

export default function Modal() {
    const { hide } = useAlert()
    const showmodal = useAlert()
    if (!showmodal.visibles) return null
    return (
        <div className="modal">
            <div className="icon-modal">
                <IoClose onClick={hide} className="icon-exit" />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti suscipit, expedita sunt temporibus in eos vero cumque.
            </p>
        </div>
    )
}
