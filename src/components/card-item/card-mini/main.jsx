import React from 'react'
import './style.css'

function MiniElement(props) {
    return (
        <div className="mini-element">
            <div className={props.backclr} >
                <img src={props.img} alt="" />
            </div>
            <h2>{props.paragrf}</h2>
            <p>{props.notes}</p>
            <span className="link">{props.link}</span>
        </div>
    )
}

export default MiniElement