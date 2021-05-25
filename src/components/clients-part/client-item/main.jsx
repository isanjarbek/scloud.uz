import React from 'react'
import './style.css'

function ClinetItem(props) {
    return (
        <div className="client-item">
            <div className="item-wrapper">
                <span className="text-client">{props.text}</span>
                <div className="about-client">
                    <img src={props.pic} alt="" />
                    <h2>{props.name}</h2>
                    <p>{props.job}</p>
                </div>
            </div>
        </div>
    )
}

export default ClinetItem