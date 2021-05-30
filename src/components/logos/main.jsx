import React from 'react'
import './style.css'

import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

import Logo1 from '../../photos/Logos/adliya.png'
import Logo2 from '../../photos/Logos/inovatsiya.png'
import Logo3 from '../../photos/Logos/idrok.png'
import Logo4 from '../../photos/Logos/lessismore.png'
import Logo5 from '../../photos/Logos/kingbook.png'
import Logo6 from '../../photos/Logos/bao.png'
import Logo7 from '../../photos/Logos/rosh.png'

function Logos() {
    return (
        <div className="logos">
            <div className="container">
                <div className="img-logos">
                    <Swiper
                        spaceBetween={0}
                        breakpoints={{
                            1300: {
                                slidesPerView: 7,
                            },
                            980: {
                                slidesPerView: 6,
                            },
                            760: {
                                slidesPerView: 5,
                            },
                            590: {
                                slidesPerView: 4,
                            },
                            340: {
                                slidesPerView: 3,
                            },
                            300: {
                                slidesPerView: 2,
                            },


                        }}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                        }}
                    >
                        <SwiperSlide> <img src={Logo1} alt="" /></SwiperSlide>
                        <SwiperSlide> <img src={Logo2} alt="" /></SwiperSlide>
                        <SwiperSlide> <img src={Logo3} alt="" /></SwiperSlide>
                        <SwiperSlide> <img src={Logo4} alt="" /></SwiperSlide>
                        <SwiperSlide> <img src={Logo5} alt="" /></SwiperSlide>
                        <SwiperSlide> <img src={Logo6} alt="" /></SwiperSlide>
                        <SwiperSlide> <img src={Logo7} alt="" /></SwiperSlide>
                    </Swiper>
                    {/* <img src={Logo1} alt="" />
                     <img src={Logo2} alt="" />
                     <img src={Logo3} alt="" />
                     <img src={Logo4} alt="" />
                     <img src={Logo5} alt="" />
                     <img src={Logo6} alt="" />
                     <img src={Logo7} alt="" />
                     <img src={Logo8} alt="" /> */}

                </div>
            </div>
        </div>
    )
}

export default Logos