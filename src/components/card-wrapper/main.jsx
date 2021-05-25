import React from 'react'
import WrItem from './wrapper-item/main'
import './style.css'

import Img1 from '../../photos/network1.png'
import Img2 from '../../photos/network2.png'
import Img3 from '../../photos/network3.png'

function WrapperItem() {
    return (
        <div className="wrapper_item_menu">
            <div className="container">
                <div className="wrapper-paragrf">
                    <h2>Why You Should Choose Us.</h2>
                    <p>Distinctively exploit optimal alignments for intuitive bandwidth. 
                        Quickly coordinate e-business
                        applications through revolutionary catalysts.
                    </p>
                </div>
                <div className="wrapper-elements">
                        <WrItem
                            photo={Img1}
                            text="Keyword Research"
                            txt="Business applications through revolutionary catalysts for chang
                        the Seamlessly underwhelm dures."
                        />
                        <WrItem
                            photo={Img2}
                            text="Seo Optimazadion"
                            txt="Business applications through revolutionary catalysts for chang
                        the Seamlessly underwhelm dures."
                        />
                        <WrItem
                            photo={Img3}
                            text="Social Marketing"
                            txt="Business applications through revolutionary catalysts for chang
                        the Seamlessly underwhelm dures."
                        />
                    </div>
                </div>
            </div>
    )
}

export default WrapperItem