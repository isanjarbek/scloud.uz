import React from 'react'
import MItem from './members-item/main'
import './style.css'

import Abdulaziz from '../../photos/abdulaziz.png'
import Ixtiyor from '../../photos/ixtiyor.png'
import Temur from '../../photos/temur.png'
import Bobur from '../../photos/bobur.png'

function Members() {
    return (
        <div className="team-part" id="team">
            <div className="container">
                <div className="team-members">
                    <h2>Bizning Jamoamiz</h2>
                    <p>Jamoamiz a'zolari mahalliy va xalqaro bozorda bir necha yillik tajriba ega mutahasislar
                    </p>
                </div>
                <div className="members">
                    <MItem
                        pic={Abdulaziz}
                        name="Abdulaziz"
                        job="CEO"
                        facebook="https://www.facebook.com/Abdulaziz.Hamidulloh"
                        instagram="https://www.instagram.com/abdulaziz.hamidulloh/"
                        telegram="https://t.me/Cloud_minds"
                    />
                    <MItem
                        pic={Ixtiyor}
                        name="Ixtiyor"
                        job="CTO at Web Team"
                        facebook="https://www.facebook.com/ihtiyor.vohobjonov.3"
                        instagram="https://www.instagram.com/ihtiyor_dev/"
                        telegram="https://t.me/Web_Distance"
                    />
                    <MItem
                        pic={Temur}
                        name="Temur"
                        job="Product Designer"
                        facebook="https://www.facebook.com/temur.usmonov.773"
                        instagram="https://www.instagram.com/temur.usmon/"
                        telegram="https://t.me/lessismore_20"
                    />
                    <MItem
                        pic={Bobur}
                        name="Bobur"
                        job="Lead of Mobile Dep."
                        facebook="https://www.facebook.com/anvarjonov.bobirbek"
                        telegram="https://t.me/aliendroid"
                    />
                </div>
            </div>
        </div>
    )
}

export default Members