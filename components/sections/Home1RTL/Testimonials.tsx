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
    const swiperOptions = {
      modules: [Autoplay, Navigation, Thumbs],
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      navigation: true,
      thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined, // Ensure swiper is initialized
    };
    return (
        <>

        <section className="testimonial-section-two pt-0">
            <div className="anim-icons">
                <img className="image-1" src="images/icons/shape-5.png" alt="" />
            </div>
            <div className="auto-container">
                <div className="row">
                    <div className="testimonials overflow-hidden col-lg-12">
                        <div className="swiper-container testimonial-slider-content">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide className="testimonial-block-two swiper-slide">
                                    <div className="inner-box">
                                        <div className="quote-icon"><img className="icon-img" src="images/icons/testi-shape1.png" alt="" /></div>
                                        <div className="text">ÙƒØ§Ù†Øª Ø§Ù„Ø¥Ù‚Ø§Ù…Ø© ÙÙŠ ÙÙ†Ø¯Ù‚ Ù‡ÙˆØªÙŠÙ„Ø± ØªØ¬Ø±Ø¨Ø© Ù„Ø§ ØªÙÙ†Ø³Ù‰. Ø¨Ø°Ù„ Ø§Ù„Ù…ÙˆØ¸ÙÙˆÙ† Ù‚ØµØ§Ø±Ù‰ Ø¬Ù‡Ø¯Ù‡Ù… Ù„Ø¶Ù…Ø§Ù† Ø±Ø§Ø­ØªÙ†Ø§ ÙˆØ±Ø¶Ø§Ù†Ø§. ÙƒØ§Ù†Øª Ø§Ù„ØºØ±ÙØ© Ù†Ø¸ÙŠÙØ© Ù„Ù„ØºØ§ÙŠØ©ØŒ Ø¨Ø¥Ø·Ù„Ø§Ù„Ø§Øª Ø®Ù„Ø§Ø¨Ø©. </div>
                                        <div className="info-box">
                                            <h5 className="name">Ø¬ÙŠÙ†ÙŠ ÙˆÙŠÙ„Ø³ÙˆÙ†</h5>
                                            <span className="designation">ØµØ§Ø­Ø¨ Ø§Ù„Ø¹Ù…Ù„</span>                    
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block-two swiper-slide">
                                    <div className="inner-box">
                                        <div className="quote-icon"><img className="icon-img" src="images/icons/testi-shape1.png" alt="" /></div>
                                        <div className="text">ÙƒØ§Ù†Øª Ø§Ù„Ø¥Ù‚Ø§Ù…Ø© ÙÙŠ ÙÙ†Ø¯Ù‚ Ù‡ÙˆØªÙŠÙ„Ø± ØªØ¬Ø±Ø¨Ø© Ù„Ø§ ØªÙÙ†Ø³Ù‰. Ø¨Ø°Ù„ Ø§Ù„Ù…ÙˆØ¸ÙÙˆÙ† Ù‚ØµØ§Ø±Ù‰ Ø¬Ù‡Ø¯Ù‡Ù… Ù„Ø¶Ù…Ø§Ù† Ø±Ø§Ø­ØªÙ†Ø§ ÙˆØ±Ø¶Ø§Ù†Ø§. ÙƒØ§Ù†Øª Ø§Ù„ØºØ±ÙØ© Ù†Ø¸ÙŠÙØ© Ù„Ù„ØºØ§ÙŠØ©ØŒ Ø¨Ø¥Ø·Ù„Ø§Ù„Ø§Øª Ø®Ù„Ø§Ø¨Ø©. </div>
                                        <div className="info-box">
                                            <h5 className="name">Ø¬ÙŠÙ†ÙŠ ÙˆÙŠÙ„Ø³ÙˆÙ†</h5>
                                            <span className="designation">ØµØ§Ø­Ø¨ Ø§Ù„Ø¹Ù…Ù„</span>                    
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-block-two swiper-slide">
                                    <div className="inner-box">
                                        <div className="quote-icon"><img className="icon-img" src="images/icons/testi-shape1.png" alt="" /></div>
                                        <div className="text">ÙƒØ§Ù†Øª Ø§Ù„Ø¥Ù‚Ø§Ù…Ø© ÙÙŠ ÙÙ†Ø¯Ù‚ Ù‡ÙˆØªÙŠÙ„Ø± ØªØ¬Ø±Ø¨Ø© Ù„Ø§ ØªÙÙ†Ø³Ù‰. Ø¨Ø°Ù„ Ø§Ù„Ù…ÙˆØ¸ÙÙˆÙ† Ù‚ØµØ§Ø±Ù‰ Ø¬Ù‡Ø¯Ù‡Ù… Ù„Ø¶Ù…Ø§Ù† Ø±Ø§Ø­ØªÙ†Ø§ ÙˆØ±Ø¶Ø§Ù†Ø§. ÙƒØ§Ù†Øª Ø§Ù„ØºØ±ÙØ© Ù†Ø¸ÙŠÙØ© Ù„Ù„ØºØ§ÙŠØ©ØŒ Ø¨Ø¥Ø·Ù„Ø§Ù„Ø§Øª Ø®Ù„Ø§Ø¨Ø©. </div>
                                        <div className="info-box">
                                            <h5 className="name">Ø¬ÙŠÙ†ÙŠ ÙˆÙŠÙ„Ø³ÙˆÙ†</h5>
                                            <span className="designation">ØµØ§Ø­Ø¨ Ø§Ù„Ø¹Ù…Ù„</span>                    
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
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
