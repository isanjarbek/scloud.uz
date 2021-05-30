import React from 'react'
import './style.css'

function PlanItem(props) {
    return (
            <div className="plan-item">
                <h2 className="item-level">{props.level}</h2>
                {/* <div className="price">
                    <span className="dolar">$</span >
                    <span className="price-num">{props.num} </span>
                    <span className="price-mouth">/mouth</span>
                </div> */}
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <p>{props.text4}</p> 
                <p>{props.text5}</p> 
            </div>
    )
}

export default PlanItem