'use client';

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings: any = {
    autoplay: true,
	speed: 800,
	lazyLoad: 'progressive',
	arrows: true,
	dots: false,
};
function Features2() {    
    return (
        <>

        <section className="feature-section-five">
            <Slider {...settings} className="feature-slider feature-slider-style1">
                <div className="feature-slide">
                    <div className="outer-box">
                        <div className="bg bg-image overlay-anim" style={{backgroundImage: 'url(images/resource/feature4-1.jpg)'}}></div>
                        <div className="content-column">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title style-three">ABOUT HOTELER</span>
                                    <h2>Discover Comfort in Every Booking</h2>
                                    <div className="text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-slide">
                    <div className="outer-box">
                        <div className="bg bg-image overlay-anim" style={{backgroundImage: 'url(images/resource/feature4-1.jpg)'}}></div>
                        <div className="content-column">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title style-three">ABOUT HOTELER</span>
                                    <h2>Discover Comfort in Every Booking</h2>
                                    <div className="text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-slide">
                    <div className="outer-box">
                        <div className="bg bg-image overlay-anim" style={{backgroundImage: 'url(images/resource/feature4-1.jpg)'}}></div>
                        <div className="content-column">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title style-three">ABOUT HOTELER</span>
                                    <h2>Discover Comfort in Every Booking</h2>
                                    <div className="text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>

        </>
    )
}
export default Features2