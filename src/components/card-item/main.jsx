import React from 'react'
import './style.css'
import MiniElement from './card-mini/main'

import Image1 from '../../photos/icon1.png'
import Image2 from '../../photos/icon2.png'
import Image3 from '../../photos/icon3.png'

function CardMini() {
    return (
        <div className="card-mini">
            <div className="container">
                <div className="card-mini-item">
                    <MiniElement 
                        backclr="backclr1 element-img"
                        img={Image1} 
                        paragrf="Grow Your Business" 
                        notes="Leverage agile frameworks to provide a robust synopsis for high level overviews." link="Read More..."/>
                    <MiniElement  
                        backclr="backclr2 element-img"
                        img={Image2} paragrf="Get Quality Ieads"
                        notes="Leverage agile frameworks to provide a robust synopsis for high level overviews." link="Read More..."/>
                    <MiniElement 
                        backclr="backclr3 element-img" 
                        img={Image3} 
                        paragrf="Drive More Sales"
                        notes="Leverage agile frameworks to provide a robust synopsis for high level overviews." link="Read More..."/>
                </div>
            </div>
        </div>
    )
}

export default CardMini