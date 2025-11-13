'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from 'next/link';
import "swiper/css";
import "swiper/css/navigation";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 4,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    navigation:{
        clickable: true,
        prevEl: ".banner__arry-prev",
        nextEl: ".banner__arry-next",
    },
    loop: true,
    breakpoints : {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    }
}

function Slider() {
    const [activeTab, setActiveTab] = useState("tab-1");
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };
    const renderTabImage = (tabId: string, imageSrc: string) => {
        return (
            <img
                id={tabId}
                className={`tab-img ${activeTab === tabId ? 'active' : ''}`}
                src={imageSrc}
                alt="image"
            />
        );
    };

    return (
        <>

        <section id='home' className="banner-section-four">
            <div className="outer-box">
                <div className="service-two-slider">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide className="service-block-four" data-tab="tab-1" onMouseEnter={() => handleTabClick("tab-1")}>
                            <div className="inner-box">
                                <div className="content">
                                    <div className="count">01 <span>/ 05</span></div>
                                    <h3 className="title">Multiple Cuisines</h3>
                                </div>
                                <div className="overlay-content">
                                    <div className="count">01 <span>/ 05</span></div>
                                    <h3 className="title"><a href="room-details.html">Multiple Cuisines</a></h3>
                                    <div className="text">Factual information on specific topics such as performance evaluations,</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="service-block-four" data-tab="tab-2" onMouseEnter={() => handleTabClick("tab-2")}>
                            <div className="inner-box">
                                <div className="content">
                                    <div className="count">02 <span>/ 05</span></div>
                                    <h3 className="title">Fine Double Beds</h3>
                                </div>
                                <div className="overlay-content">
                                    <div className="count">02 <span>/ 05</span></div>
                                    <h3 className="title"><a href="room-details.html">Fine Double Beds</a></h3>
                                    <div className="text">Factual information on specific topics such as performance evaluations,</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="service-block-four" data-tab="tab-3" onMouseEnter={() => handleTabClick("tab-3")}>
                            <div className="inner-box">
                                <div className="content">
                                    <div className="count">03 <span>/ 05</span></div>
                                    <h3 className="title">Kid's Playground</h3>
                                </div>
                                <div className="overlay-content">
                                    <div className="count">03 <span>/ 05</span></div>
                                    <h3 className="title"><a href="room-details.html">Kid's Playground</a></h3>
                                    <div className="text">Factual information on specific topics such as performance evaluations,</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="service-block-four" data-tab="tab-4" onMouseEnter={() => handleTabClick("tab-4")}>
                            <div className="inner-box">
                                <div className="content">
                                    <div className="count">04 <span>/ 05</span></div>
                                    <h3 className="title">Stunning View</h3>
                                </div>
                                <div className="overlay-content">
                                    <div className="count">04 <span>/ 05</span></div>
                                    <h3 className="title"><a href="room-details.html">Stunning View</a></h3>
                                    <div className="text">Factual information on specific topics such as performance evaluations,</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="service-block-four" data-tab="tab-5" onMouseEnter={() => handleTabClick("tab-5")}>
                            <div className="inner-box">
                                <div className="content">
                                    <div className="count">05 <span>/ 05</span></div>
                                    <h3 className="title">Couple Beds</h3>
                                </div>
                                <div className="overlay-content">
                                    <div className="count">01 <span>/ 05</span></div>
                                    <h3 className="title"><a href="room-details.html">Couple Cuisines</a></h3>
                                    <div className="text">Factual information on specific topics such as performance evaluations,</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="banner__arrys">
                        <button className="banner__slider-arrys banner__arry-prev"><i className="fa-regular fa-arrow-left" /></button>
                        <button className="banner__slider-arrys banner__arry-next"><i className="fa-regular fa-arrow-right" /></button>
                    </div>
                    <div className="banner__image">
                        {renderTabImage("tab-1", "images/background/bg1.jpg")}
                        {renderTabImage("tab-2", "images/background/bg2.jpg")}
                        {renderTabImage("tab-3", "images/background/bg3.jpg")}
                        {renderTabImage("tab-4", "images/background/bg4.jpg")}
                        {renderTabImage("tab-5", "images/background/bg3.jpg")}
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Slider;
