import React from 'react'
import './style.css'

import Button from '../../button/button'

function WrItem(props) {
    return (
        <div className="wrapper-item">
            <div className="item-image">
                <img src={props.photo} alt="" />
            </div>
            <div className="elements">
                <h2>{props.text}</h2>
                <p>{props.txt}</p>
                <Button name="started-now" text="Learn More" />
            </div>
        </div>
    )
}

export default WrItem