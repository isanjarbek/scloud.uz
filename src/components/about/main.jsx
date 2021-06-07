import React from 'react'
import './style.css'
import Maket from './maket/main'

import SpeedM from '../../photos/speedm.png'
import Icon4 from '../../photos/icon4.png'
import Icon5 from '../../photos/icon5.png'
import Icon6 from '../../photos/Icon6.png'

import Fade from 'react-reveal/Fade';

function AboutSEO() {
    return (
        <Fade bottom>
            <div className="about-seo" id="imkoniyatlar">
                <div className="row-about-first">
                    <div className="about-first-photo">
                        <img src={SpeedM} alt="" />
                    </div>
                    <div className="about-first-text">
                        <div className="text-content">
                            <h2>Ushbu xizmatlar <br />
                        qanday yordam beradi.
                    </h2>
                            <p>Distinctively exploit optimal alignments for intuitive bandwidth.
                            Quickly coordinate e-business applications through revolutionary.
                    </p>
                        </div>
                        <div className="maket-elements">
                            <Maket img={Icon4}
                                text="Veb ilovalar"
                                matn="Veb ilovalar orqali o'z biznesingizni internetda rivojlantirasiz. Sotuvlarni online amalga oshira olasiz"
                            />
                            <Maket img={Icon5}
                                text="Mobil ilovalaar"
                                matn="Mijozlarni doimiy nazoratga olishda, ularning xaridlarini osonlashtirishda qo'llashingiz mumkin"
                            />
                            <Maket img={Icon6}
                                text="Raqamli marketing"
                                matn="Brendingizni, mahsulotlaringizni internetda va ijtimoiy tarmoqlarda targ'ib qila olasiz"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </Fade>
    )
}

export default AboutSEO