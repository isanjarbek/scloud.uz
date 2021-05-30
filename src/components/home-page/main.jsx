import React, { useState } from 'react'
import './style.css'
import Button from '../button/button'

import { HiPlay } from "react-icons/hi";
import MainPhoto from '../../photos/main.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import ModalWindow from '../modal/main';

function Main() {
    const [modal, setModal] = useState(false)

    return (
        <div className="main" id="home">
            <div className="container">
                <div className="main-menu">
                    <div className="main-text">
                        <h2 >
                            Biznesingiz  uchun raqamli yechimlar
                        </h2>
                        <p>
                            Biznesingizni avtomatlashtiring. Muammolarni raqamli yechimlar bilan hal qiling!
                    </p>
                        <div className="main-buttons">
                            <Button
                                name="started-now main-btn"
                                text="Batafsil"
                                show={() => setModal({ modal: true })}
                            />
                            <ModalWindow
                                title={'Raqamli mahsulotlar'}
                                text="Hozirda biznesni rivojlantirishning asosiy omillaridan biri bu jarayonlarni avtomatlashtirish. Siz o'z biznesingizda ish jarayonini avtomatlashtirib jarayonni konveyrga o'tkazishingiz, ish samaradorligini oshirishingiz va to'liq nazorat qila olishingiz mumkin."
                                isOpened={modal}
                                onModalClose={() => setModal(false)}
                            />
                            <div className="start-video">
                                <HiPlay
                                    color="#1e85fe"
                                    className="start-video-svg"
                                />
                                <span className="start-video-text">Watch Video</span>
                            </div>
                        </div>
                    </div>
                    <div className="main-photo">
                        <LazyLoadImage
                            src={MainPhoto}
                            effect="blur"
                            delayTime="2500"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main

