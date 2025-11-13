'use client';

"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function Testimonial() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null); // State to store the thumbs swiper
    const swiperOptions: any = {
      modules: [Autoplay, Navigation, Thumbs],
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      navigation:{
        clickable: true,
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
      thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined, // Ensure swiper is initialized
    };
    return (
        <>

        <section className="testimonial-section-two style-light">
            <div className="testimonial-pattrn1-1 bounce-y" />
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">OUR CUSTOMER FEEDBACK</span>
                    <h2>Feedback From Clients</h2>
                </div>
                <div className="row">
                    <div className="testimonials overflow-hidden col-lg-12">
                        <div className="swiper-container testimonial-slider-content">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide className="testimonial-block-two swiper-slide">
                                    <div className="inner-box">
                                        <div className="quote-icon"><i className="icon fa fa-quote-left" /></div>
                                        <div className="text">We've had negative experiences with call centres through Stratify, so I decided to build my own remote team. Now, I have full control over the team, allowing them to work from home, no matter where they are located.</div>
                                        <div className="info-box">
                                            <h5 className="name">Jenny Wilson</h5>
                                            <span className="designation">Business Owner</span>                    
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block-two swiper-slide">
                                    <div className="inner-box">
                                        <div className="quote-icon"><i className="icon fa fa-quote-left" /></div>
                                        <div className="text">We've had negative experiences with call centres through Stratify, so I decided to build my own remote team. Now, I have full control over the team, allowing them to work from home, no matter where they are located.</div>
                                        <div className="info-box">
                                            <h5 className="name">Marvin McKinney</h5>
                                            <span className="designation">President of Sales</span>                    
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block-two swiper-slide">
                                    <div className="inner-box">
                                        <div className="quote-icon"><i className="icon fa fa-quote-left" /></div>
                                        <div className="text">We've had negative experiences with call centres through Stratify, so I decided to build my own remote team. Now, I have full control over the team, allowing them to work from home, no matter where they are located.</div>
                                        <div className="info-box">
                                            <h5 className="name">Jenny Wilson</h5>
                                            <span className="designation">Business Owner</span>                    
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                        <div className="swiper-container testimonial-thumbs mx-auto">
                            <Swiper
                                onSwiper={setThumbsSwiper} // Set the swiper instance
                                slidesPerView={3}
                                spaceBetween={0}
                                watchSlidesProgress={true} // Track slides for syncing
                                className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide"><img src="images/resource/testi2-thumb1.png" alt=""/></SwiperSlide>
                                <SwiperSlide className="swiper-slide"><img src="images/resource/testi2-thumb2.png" alt=""/></SwiperSlide>
                                <SwiperSlide className="swiper-slide"><img src="images/resource/testi2-thumb3.png" alt=""/></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Testimonial

