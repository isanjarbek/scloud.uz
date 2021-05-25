import React from 'react'
import './style.css'
import PlanItem from './plan-item/main'

function Plans() {
    return (
        <div className="plans">
            <div className="container">
                <div className="plan-texts">
                    <h2>Our Plans</h2>
                    <p>Choose the right SEO for you</p>
                </div>
                <div className="plans-elements">
                    <PlanItem level="Plus" num="30"
                        text1="50GB Bandwidth"
                        text2="Business & Financ Analysing"
                        text3="24 Hour Support"
                        text4="Customer Managemet"
                    />
                    <PlanItem level="Beginner" num="55"
                        text1="50GB Bandwidth"
                        text2="Business & Financ Analysing"
                        text3="24 Hour Support"
                        text4="Customer Managemet"
                    />
                    <PlanItem level="Advanced" num="129"
                        text1="50GB Bandwidth"
                        text2="Business & Financ Analysing"
                        text3="24 Hour Support"
                        text4="Customer Managemet"
                    />
                </div>
            </div>
        </div>
    )
}

export default Plans