import React from 'react'
import './style.css'

function Maket(props) {
    return (
        <div className="maket-item">
            <img src={props.img} alt="" />
            <div className="maket-txt">
                <h2>{props.text}</h2>
                <p>{props.matn}</p>
            </div>
        </div>
    )
}

export default Maket