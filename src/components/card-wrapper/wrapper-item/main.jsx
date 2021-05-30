import React, { useState } from 'react'
import './style.css'

import Button from '../../button/button'
import ModalWindow from '../../modal/main'

function WrItem(props) {

    

    return (
        <div className="wrapper-item">
            <div className="item-image">
                <img src={props.photo} alt="" />
            </div>
            <div className="elements">
                <h2>{props.text}</h2>
                <p>{props.txt}</p>
                {/* <Button name="started-now" text="Learn More" show={() => setModal({ modal: true })} />
                <ModalWindow
                    title={'Web Products'}
                    text={'Provide all kind of seo services and help to improve seo ranking. Globally incubate standards.'}
                    isOpened={modal}
                    onModalClose={() => setModal(false)}
                /> */}
            </div>
        </div>
    )
}

export default WrItem