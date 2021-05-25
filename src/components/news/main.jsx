import React from 'react'
import './style.css'
import NewsElement from './news-item/main'

import PhotoNews from '../../photos/news.png'
import PhotoNews2 from '../../photos/new2.png'

import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

function News() {
    return (
        <div className="news">
            <div className="news-part">
                <div className="news-paragrf container">
                    <h2>Our Latest News</h2>
                    <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                        Curae Suspendisse ante arcu, consectetur id nisl eget.
                    </p>
                </div>
                <div className="news-wrapper">
                    <Swiper
                        spaceBetween={100}
                        // slidesPerView={1}
                        breakpoints={{
                            1300: {
                                slidesPerView: 2,
                            },
                            100: {
                                slidesPerView: 1,
                            },
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                        }}

                    >
                        <SwiperSlide>
                            <NewsElement
                                pic={PhotoNews}
                                content="How to become a new digital marketing idea?"
                                num1="32" num2="13"
                                text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure."

                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsElement
                                pic={PhotoNews2}
                                content="How to become a new digital marketing idea?"
                                num1="32" num2="13"
                                text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsElement
                                pic={PhotoNews}
                                content="How to become a new digital marketing idea?"
                                num1="32" num2="13"
                                text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsElement
                                pic={PhotoNews2}
                                content="How to become a new digital marketing idea?"
                                num1="32" num2="13"
                                text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure."
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default News