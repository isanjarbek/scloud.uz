import React, { useState } from 'react'
import WrItem from './wrapper-item/main'
import './style.css'

import Img1 from '../../photos/network1.png'
import Img2 from '../../photos/network2.png'
import Img3 from '../../photos/network3.png'
import Button from '../button/button'
import ModalWindow from '../modal/main'

function WrapperItem() {

    const [modal, setModal] = useState({ modal1: false, modal2: false, modal3: false })

    return (
        <div className="wrapper_item_menu" id="xizmatlar">
            <div className="container">
                <div className="wrapper-paragrf">
                    <h2>Sizga taklif qiladigan xizmatlarimiz</h2>
                    <p>
                        Ushbu xizmatlarimiz orqali biznesingizni tartiblashingiz, nazorat qilishingiz va rivojlantirishingiz mumkin.
                    </p>
                </div>
                <div className="wrapper-elements">
                    <div className="wrapper">
                        <WrItem
                            photo={Img1}
                            text="Veb mahsulotlar"
                            txt="Biznesingiz uchun funksional platformalar, veb ilovalar, tashrif saytlari va telegram botlari bo'lishini ta'minlaymiz."
                        />
                        <Button name="btn" text="Batafsil" show={() => setModal({ ...modal, modal1: true })} />
                        <ModalWindow
                            title={'Web Products'}
                            text={'Provide all kind of seo services and help to improve seo ranking. Globally incubate standards.'}
                            isOpened={modal.modal1}
                            onModalClose={() => setModal(false)}
                        />
                    </div>
                    <div className="wrapper">
                        <WrItem
                            photo={Img2}
                            text="Mobil ilovalar"
                            txt="Loyihalar uchun mobil ilovalar yaratish. Mavjud tizimlarni Android va iOS tizimlariga o'tkazish. Mijozlar uchun mobil ilovalar yaratish"
                        />
                        <Button name="btn" text="Batafsil" show={() => setModal({ ...modal, modal2: true })} />
                        <ModalWindow
                            title={'Cross Platform'}
                            text={'Provide all kind of seo services and help to improve seo ranking. Globally incubate standards.'}
                            isOpened={modal.modal2}
                            onModalClose={() => setModal(false)}
                        />
                    </div>
                    <div className="wrapper">
                        <WrItem
                            photo={Img3}
                            text="Raqamli Marketing"
                            txt="Qidiruv tizimlari orqali optimizatsiya, ularni tahlil qilish. Mijozlar oqimini rivojlantirish va SMM xizmatlari."
                        />
                        <Button name="btn" text="Batafsil" show={() => setModal({ ...modal, modal3: true })} />
                        <ModalWindow
                            title={'Digital Marketing'}
                            text={'Provide all kind of seo services and help to improve seo ranking. Globally incubate standards.'}
                            isOpened={modal.modal3}
                            onModalClose={() => setModal(false)}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WrapperItem