import React from 'react'
import './style.css'
import Button from '../button/button'

import PhotoSp from '../../photos/speed.png'
function SpeedComp() {
    return (
        <div className="speed-comp" id="bog'lanish">
            <div className="container">
                <div className="speed-comp-elements">
                    <div className="left-item text-content">
                        <h2>Sizga yordam bera olamiz</h2>
                        <p>Bog'lanish uchun kontaktlaringizni qoldiring, siz bilan bog'lanib biznesingiz rivojlanishiga hissa qo'shamiz.
                        </p>
                        <div className="type-item">
                            <div className="input-elements">
                                <input type="text" placeholder="Ism" className="text-type" />
                                <div className="line"></div>
                                <input type="number" placeholder="Telefon raqam" className="email-type" />
                            </div>
                            <Button name="started-now submit" text="Yuborish" />
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