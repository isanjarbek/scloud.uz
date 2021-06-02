import React from 'react'
import './style.css'

function WrItem(props) {

    return (
        <div className="wrapper-item">
            <div className="item-image">
                <img src={props.photo} alt="" />
            </div>
            <div className="elements">
                <h2>{props.text}</h2>
                <p>{props.txt}</p>
            </div>
        </div>
    )
}

export default WrItem