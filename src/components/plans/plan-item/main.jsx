import React from 'react'
import './style.css'

function PlanItem(props) {
    return (
        <div className="plan-element-module">
            <div className="plan-item">
                <span className="item-level">{props.level}</span>
                <div className="price">
                    <span className="dolar">$</span >
                    <span className="price-num">{props.num} </span>
                    <span className="price-mouth">/mouth</span>
                </div>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <p>{props.text4}</p>
                <button className="plan-button">Get Started</button>
            </div>
        </div>
    )
}

export default PlanItem