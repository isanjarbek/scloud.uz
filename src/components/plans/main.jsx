import React, { useState } from 'react'
import './style.css'
import PlanItem from './plan-item/main'
import Modal2 from '../modal/modal2'

import Image1 from '../../photos/network1.png'
import Image2 from '../../photos/network2.png'
import Image3 from '../../photos/network3.png'

function Plans() {

    const [modal, setModal] = useState({ modal1: false, modal2: false, modal3: false })

    return (
        <div className="plans">
            <div className="container">
                <div className="plan-texts">
                    <h2>Servis va mahsulotlarimiz</h2>
                    <p>Choose the right SEO for you</p>
                </div>
                <div className="plans-elements">
                    <div className="plan-elements-item">
                        <PlanItem level="Veb ilovalar" num="30"
                            text1="Veb ilovalar"
                            text2="Online savdo"
                            text3="Tashrif saytlari"
                            text4="Telegram botlar"
                            text5="Server xizmatlari"
                        />
                        <button
                            className="plan-button"
                            onClick={() => setModal({ ...modal, modal1: true })}
                        >   Boshlash
                        </button>
                        <Modal2
                            cours={'Veb ilovalar'}
                            txt="Veb ilovalar,
                            Online savdo,
                            Tashrif saytlari,
                            Telegram botlar,
                            Server xizmatlari
                            "
                            image={Image1}
                            isOpened={modal.modal1}
                            onModalClose={() => setModal(false)}
                        />
                    </div>
                    <div className="plan-elements-item">
                        <PlanItem level="Mobil ilovalar" num="55"
                            text1="Android ilovalar"
                            text2="iOS ilovalar"
                            text3="Kross ilovalar"
                            text4="ilovalarni yangilash"
                            text5="Native'ga o'girish"
                        />
                        <button
                            className="plan-button"
                            onClick={() => setModal({ ...modal, modal2: true })}
                        >   Boshlash
                        </button>
                        <Modal2
                            cours={'Mobil ilovalar'}
                            txt="Android ilovalar,
                            iOS ilovalar,
                            Kross ilovalar,
                            ilovalarni yangilash,
                            Native'ga o'girish
                            "
                            image={Image2}
                            isOpened={modal.modal2}
                            onModalClose={() => setModal(false)}
                        />
                    </div>
                    <div className="plan-elements-item">
                        <PlanItem level="Raqamli marketing" num="129"
                            text4="Qidiruvni optimizatsiyalash (SEO)"
                            text2="Kontent marketing"
                            text3="Pay-per-click (PPC)"
                            text1="SMM"
                        />
                        <button
                            className="plan-button"
                            onClick={() => setModal({ ...modal, modal3: true })}
                        >   Boshlash
                        </button>
                        <Modal2
                            cours={'Raqamli marketing'}
                            txt="Qidiruvni optimizatsiyalash (SEO),
                            Kontent marketing,
                            Pay-per-click (PPC),
                            SMM
                            "
                            image={Image3}
                            isOpened={modal.modal3}
                            onModalClose={() => setModal(false)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans