"use client";

import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings: any = {
    autoplay: true,
    speed: 800,
    lazyLoad: 'progressive',
    arrows: false,
    dots: true,
};

function Banner() {
    return (
        <>

        <section id='home' className="banner-section-eight">
            <Slider {...settings} className="banner-slider banner-slider-home3">
                <div className="banner-slide">
                    <div className="inner-slide">
                        <div className="bg bg-image overflow-hidden" style={{backgroundImage: 'url(images/banner/banner2-1.jpg)'}}></div>
                        <div className="outer-box">
                            <div className="images-column">
                                <div className="inner-column wow fadeInRight" data-wow-delay="200ms">
                                    <div className="bg bg-image1" style={{backgroundImage: 'url(images/banner/banner3-2.jpg)'}}></div>
                                </div>
                            </div>
                            <div className="content-column">
                                <div className="inner-column">
                                    <div className="offer-text wow fadeInUp" data-wow-delay="300ms">book your room</div>
                                    <h1 className="title wow fadeInUp" data-wow-delay="600ms">Your perfect getaway <br />Awaits, book today</h1>
                                    <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                                        <Link href="/contact" className="theme-btn btn-style-two"><span className="btn-title">BOOK NOW</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="info-text">Hoteler</div>
                        </div>
                    </div>
                </div>
                <div className="banner-slide">
                    <div className="inner-slide">
                        <div className="bg bg-image overflow-hidden" style={{backgroundImage: 'url(images/banner/banner2-1.jpg)'}}></div>
                        <div className="outer-box">
                            <div className="images-column">
                                <div className="inner-column wow fadeInRight" data-wow-delay="200ms">
                                    <div className="bg bg-image1"style={{backgroundImage: 'url(images/banner/banner3-2.jpg)'}}></div>
                                </div>
                            </div>
                            <div className="content-column">
                                <div className="inner-column">
                                    <div className="offer-text wow fadeInUp" data-wow-delay="300ms">book your room</div>
                                    <h1 className="title wow fadeInUp" data-wow-delay="600ms">Your perfect getaway <br />Awaits, book today</h1>
                                    <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                                        <Link href="/contact" className="theme-btn btn-style-two"><span className="btn-title">BOOK NOW</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="info-text">Hoteler</div>
                        </div>
                    </div>
                </div>
                <div className="banner-slide">
                    <div className="inner-slide">
                        <div className="bg bg-image overflow-hidden" style={{backgroundImage: 'url(images/banner/banner2-1.jpg)'}}></div>
                        <div className="outer-box">
                            <div className="images-column">
                                <div className="inner-column wow fadeInRight" data-wow-delay="200ms">
                                    <div className="bg bg-image1" style={{backgroundImage: 'url(images/banner/banner3-2.jpg)'}}></div>
                                </div>
                            </div>
                            <div className="content-column">
                                <div className="inner-column">
                                    <div className="offer-text wow fadeInUp" data-wow-delay="300ms">book your room</div>
                                    <h1 className="title wow fadeInUp" data-wow-delay="600ms">Your perfect getaway <br />Awaits, book today</h1>
                                    <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                                        <Link href="/contact" className="theme-btn btn-style-two"><span className="btn-title">BOOK NOW</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="info-text">Hoteler</div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>

        </>
    )
}
export default Banner
