import React from 'react'
import './style.css'
import MiniElement from './card-mini/main'

import Image1 from '../../photos/icon1.png'
import Image2 from '../../photos/icon2.png'
import Image3 from '../../photos/icon3.png'

import Fade from 'react-reveal/Fade';

function CardMini() {
    return (
        <Fade bottom>
            <div className="card-mini">
                <div className="container">
                    <div className="card-mini-item">
                        <MiniElement
                            backclr="backclr1 element-img"
                            img={Image1}
                            paragrf="Foydani oshirish"
                            notes="Avtomatlashtirish natijasida xarajatlar kamayadi, savdo nazoratga olinadi" link="Read More..." />
                        <MiniElement
                            backclr="backclr2 element-img"
                            img={Image2} paragrf="Servis rivojlanadi"
                            notes="Mijozlar bilan muloqot vaqti qisqaradi, mijozlar kutishiga xojat qolmaydi.." link="Read More..." />
                        <MiniElement
                            backclr="backclr3 element-img"
                            img={Image3}
                            paragrf="Nazoratga olinadi"
                            notes="Har bir komanda, har bir protses nazoratga olinadi" link="Read More..." />
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default CardMini