"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,    
};

function Banner() {
    return (
        <>
            <section id='home' className="banner-section-seven">
                <Swiper {...swiperOptions} className="banner-slider banner-slider-home1">
                    <SwiperSlide className="banner-slide">
                        <div className="outer-box">
                            <figure className="image-1 wow fadeInUp tm-gsap-img-parallax overflow-hidden"><img src="images/banner/banner1-1.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="star-rating" data-animation-in="fadeInUp" data-wow-delay="300ms">
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                </div>
                                <h1 data-animation-in="fadeInUp" data-delay-in="0.3">احجز فندق أحلامك <br />مع هوتيلر</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="banner-slide">
                        <div className="outer-box">
                            <figure className="image-1 wow fadeInUp tm-gsap-img-parallax overflow-hidden"><img src="images/banner/banner1-1.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="star-rating" data-animation-in="fadeInUp" data-wow-delay="300ms">
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                </div>
                                <h1 data-animation-in="fadeInUp" data-delay-in="0.3">احجز فندق أحلامك <br />مع هوتيلر</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="banner-slide">
                        <div className="outer-box">
                            <figure className="image-1 wow fadeInUp tm-gsap-img-parallax overflow-hidden"><img src="images/banner/banner1-1.jpg" alt="" /></figure>
                            <div className="content-box">
                                <div className="star-rating" data-animation-in="fadeInUp" data-wow-delay="300ms">
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                </div>
                                <h1 data-animation-in="fadeInUp" data-delay-in="0.3">احجز فندق أحلامك <br />مع هوتيلر</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}
export default Banner
