import React, { useState } from 'react'
import './style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button from '../button/button'
import StaticPhoto from '../../photos/static.png'

import ModalWindow from '../modal/main';

function Statistic() {
    const [modal, setModal] = useState(false)

    return (
        <div className="statistic">
            <div className="container">
                <div className="static-content">
                    <div className="static-text">
                        <h2>Biznesingizni avtomatlshtiring...</h2>
                        <p>
                            Biznesingizni avtomatlashtirish orqali mijozlar oqimini nazorat qilishingiz, tahlil qilishingiz mumkin bo'ladi. Bu orqali siz yangi mijozlar topish, mavjud mijozlarni doimiy mijozlarga aylantirishgiz mumkin bo'ladi. Jarayon to'liq nazoratga olinadi.
                </p>
                        <Button
                            name="started-now"
                            text="Batafsil"
                            show={() => setModal({ modal: true })}
                        />
                        <ModalWindow
                            title={'Perfect Solution'}
                            text={'Quickly coordinate e-business applications through revolutionary catalysts for chang the Seamlessly underwhelm optimal testing procedures.'}
                            isOpened={modal}
                            onModalClose={() => setModal(false)}
                        />
                    </div>
                    <div className="static-photo">
                        <LazyLoadImage
                            src={StaticPhoto}
                            effect="blur"
                            delayTime="2500"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic