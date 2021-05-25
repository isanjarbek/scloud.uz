import React from 'react'
import MItem from './members-item/main'
import './style.css'

import Nattasha from '../../photos/natasha.png'
import John from '../../photos/john.png'
import Haris from '../../photos/haris.png'
import Nelson from '../../photos/nelson.png'

function Members() {
    return (
        <div className="team-part" id="team">
            <div className="container">
                <div className="team-members">
                    <h2>Our Expert Team Members</h2>
                    <p>This new-found knowledge may then be used by engineers to
                    create new tools and machines.
                </p>
                </div>
                <div className="members">
                    <MItem pic={Nattasha} name="Nattasha" job="Web Develper" />
                    <MItem pic={John} name="John Doe" job="Web Designer" />
                    <MItem pic={Haris} name="Haris Milas" job="Ceo & Co-Funder" />
                    <MItem pic={Nelson} name="Nelson Mecoy" job="Marketing Manager" />
                </div>
            </div>
        </div>
    )
}

export default Members