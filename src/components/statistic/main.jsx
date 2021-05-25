import React from 'react'
import './style.css'
import Button from '../button/button'

import Line from '../../photos/Vector 1.png'
import StaticPhoto from '../../photos/static.png'

function Statistic() {
    return (
        <div className="statistic">
            <div className="container">
                <div className="static-content">
                    <div className="static-text">
                        <h2>Perfect Solution For Your Business</h2>
                        <p>
                            Distinctively exploit optimal alignments for intuitive bandwidth. Quickly
                            coordinate e-business applications through revolutionary catalysts for
                            chang the Seamlessly underwhelm optimal testing procedures.
                </p>
                        <Button name="started-now" text="Learn More" />
                    </div>
                    <div className="static-photo">
                        <img src={StaticPhoto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic