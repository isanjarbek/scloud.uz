import React from 'react'
import './style.css'
import Maket from './maket/main'

import SpeedM from '../../photos/speedm.png'
import Icon4 from '../../photos/icon4.png'
import Icon5 from '../../photos/icon5.png'
import Icon6 from '../../photos/Icon6.png'

function AboutSEO() {
    return (
        <div className="about-seo">
            <div className="row-about-first">
                <div className="about-first-photo">
                    <img src={SpeedM} alt="" />
                </div>
                <div className="about-first-text">
                    <div className="text-content">
                        <h2>You may ask what <br />
                        SEO & why do you need it?
                    </h2>
                        <p>Distinctively exploit optimal alignments for intuitive bandwidth.
                        Quickly coordinate e-business applications through revolutionary.
                    </p>
                    </div>
                    <div className="maket-elements">
                        <Maket img={Icon4}
                            text="Social Media Marketing"
                            matn="Business applications through revolutionary catalysts
                         for chang the Seamlessly underwhelm dures."
                        />
                        <Maket img={Icon5}
                            text="Email Marketing"
                            matn="Business applications through revolutionary catalysts
                         for chang the Seamlessly underwhelm dures."
                        />
                        <Maket img={Icon6}
                            text="SEO Optimization"
                            matn="Business applications through revolutionary catalysts
                         for chang the Seamlessly underwhelm dures."
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutSEO