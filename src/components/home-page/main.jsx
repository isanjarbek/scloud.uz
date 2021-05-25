import React from 'react'
import './style.css'
import Button from '../button/button'

import Start from '../../photos/icon.png'
import MainPhoto from '../../photos/main.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Main() {
    return (
        <div className="main">
            <div className="container">
                <div className="main-menu">
                    <div className="main-text">
                        <h2>
                            SEO & Digital Marketing For Your Website.
                        </h2>
                        <p>
                            Provide all kind of seo services and help to improve
                            seo ranking. Globally incubate standards.
                    </p>
                        <div className="main-buttons">
                            <Button name="started-now" text="Start Now" />
                            <div className="start-video">
                                <img src={Start} alt="" />
                                <span className="start-video-text">Watch Video</span>
                            </div>
                        </div>
                    </div>
                    <div className="main-photo">
                        <LazyLoadImage
                            src={MainPhoto}
                            effect="blur"
                            delayTime="1500"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main