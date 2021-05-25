import React from 'react'
import './style.css'
import Button from '../button/button'

import PhotoSp from '../../photos/speed.png'
function SpeedComp() {
    return (
        <div className="speed-comp">
            <div className="container">
                <div className="speed-comp-elements">
                    <div className="left-item text-content">
                        <h2>Check Your Website Speed </h2>
                        <p>Distinctively exploit optimal alignments for intuitive bandwidth.
                        Quickly coordinate e-business through revolutionary.
                        </p>
                        <div className="type-item">
                            <div className="input-elements">
                                <input type="text" placeholder="Web URL" className="text-type" />
                                <div className="line"></div>
                                <input type="email" placeholder="Email Address" className="email-type" />
                            </div>
                            <Button name="started-now submit" text="Submit" />
                        </div>
                    </div>
                    <div className="right-item">
                        <img src={PhotoSp} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeedComp