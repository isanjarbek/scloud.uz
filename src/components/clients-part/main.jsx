import React from 'react'
import ClinetItem from './client-item/main'
import './style.css'

import Halson from '../../photos/halson.png'
import Selena from '../../photos/selena.png'

import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

function Clients() {
    return (
        <div className="clients">

            <div className="clients-part">
                <div className="client-paragrf">
                    <h2>Our Clients Say</h2>
                    <p>Our in - house search engine experts deliver profitable Google,
                    Bing, Yahoo Ranking.
                        </p>
                </div>
                <div className="clients-wrapper">
                    <Swiper
                        spaceBetween={50}
                        // slidesPerView={3}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                            },
                            760: {
                                slidesPerView: 2,
                            },
                            100: {
                                slidesPerView: 1,
                            },
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                        }}

                    >
                        <SwiperSlide>
                            <ClinetItem
                                text="At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti
                                quos dolores et quas molestias excepturi sint 
                                cupiditate non provident."
                                pic={Halson}
                                name="Rabith Halson"
                                job="Web Design"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClinetItem
                                text="At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti
                                quos dolores et quas molestias excepturi sint 
                                cupiditate non provident."
                                pic={Selena}
                                name="Selena Roy"
                                job="UI Designer"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClinetItem
                                text="At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti
                                quos dolores et quas molestias excepturi sint 
                                cupiditate non provident."
                                pic={Halson}
                                name="Rabith Halson"
                                job="Web Design"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClinetItem
                                text="At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti
                                quos dolores et quas molestias excepturi sint 
                                cupiditate non provident."
                                pic={Halson}
                                name="Rabith Halson"
                                job="Web Design"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Clients