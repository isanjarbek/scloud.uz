import React from 'react'
import './style.css'

function Devitem(props) {
    return (
        <div className={props.class}>
            <img src={props.image} alt="logo" className="logo"/>
            <p className="program_lang">{props.name}</p>
        </div>
    )
}

export default Devitem