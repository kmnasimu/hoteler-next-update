"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween: 130,
    loop: true,
    centeredSlides: true,
};

function Banner() {
    return (
        <>

        <section id='home' className="banner-section-nine">
            <div className="outer-box">
                <div className="swiper-container banner-slider banner-slider-style-home5">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide className="banner-slide swiper-slide">
                            <div className="inner-slide">
                                <div className="content-column">
                                    <div className="bg bg-image overflow-hidden" style={{backgroundImage: 'url(images/banner/banner5-1.jpg)'}}></div>
                                    <div className="inner-column">
                                    <div className="offer-text wow fadeInUp" data-wow-delay="300ms">Hotel booking</div>
                                        <h1 className="title wow fadeInUp" data-wow-delay="600ms">Visit your Dream Hotel & Booking  Room Now</h1>
                                        <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                                            <Link href="/contact" className="theme-btn btn-link-style"><span className="btn-title">BOOK NOW</span> <i className="icon fa fa-arrow-right-long"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="banner-slide swiper-slide">
                            <div className="inner-slide">
                                <div className="content-column">
                                    <div className="bg bg-image overflow-hidden" style={{backgroundImage: 'url(images/banner/banner5-2.jpg)'}}></div>
                                    <div className="inner-column">
                                        <div className="offer-text wow fadeInUp" data-wow-delay="300ms">Hotel booking</div>
                                        <h1 className="title wow fadeInUp" data-wow-delay="600ms">Visit your Dream Hotel & Booking  Room Now</h1>
                                        <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                                            <Link href="/contact" className="theme-btn btn-link-style"><span className="btn-title">BOOK NOW</span> <i className="icon fa fa-arrow-right-long"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="banner-slide swiper-slide">
                            <div className="inner-slide">
                                <div className="content-column">
                                    <div className="bg bg-image overflow-hidden" style={{backgroundImage: 'url(images/banner/banner5-3.jpg)'}}></div>
                                    <div className="inner-column">
                                        <div className="offer-text wow fadeInUp" data-wow-delay="300ms">Hotel booking</div>
                                        <h1 className="title wow fadeInUp" data-wow-delay="600ms">Visit your Dream Hotel & Booking  Room Now</h1>
                                        <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                                            <Link href="/contact" className="theme-btn btn-link-style"><span className="btn-title">BOOK NOW</span><i className="icon fa fa-arrow-right-long"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Banner;