import React from 'react'
import './style.css'

import Logo1 from '../../photos/1.png'
import Logo2 from '../../photos/2.png'
import Logo3 from '../../photos/3.png'
import Logo4 from '../../photos/4.png'
import Logo5 from '../../photos/5.png'

function Logos() {
    return (
        <div className="logos">
            <div className="container">
                <div className="img-logos">
                    <img src={Logo1} alt="" />
                    <img src={Logo2} alt="" />
                    <img src={Logo3} alt="" />
                    <img src={Logo4} alt="" />
                    <img src={Logo5} alt="" />
                    <img src={Logo1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Logos