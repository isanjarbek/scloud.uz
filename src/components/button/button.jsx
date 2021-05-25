import React from 'react'
import { useAlert } from '../../context'
import './button.css'

function Button(props) {
    const { show } = useAlert()
    return (
        <div className="started">
            <button onClick={show} className={props.name}>{props.text}</button>
        </div>
    )
}

export default Button