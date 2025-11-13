'use client';

import React from 'react';
import Link from 'next/link';
import { FadeInUp, FadeInRight } from '@/lib/animations';

function Banner() {
    return (
        <>
        
        <section id='home' className="banner-section-six">
            <div className="anim-icons">
                <img className="image-1" src="images/icons/shape-17.png" alt="" />
            </div>
            <div className="outer-box">
                <div className="content-column">
                    <div className="inner-column">
                        <FadeInUp delay={0.3} className="offer-text">
                            <div className="star-rating">
                                <i className="fa-sharp fa-solid fa-star" />
                                <i className="fa-sharp fa-solid fa-star" />
                                <i className="fa-sharp fa-solid fa-star" />
                                <i className="fa-sharp fa-solid fa-star" />
                                <i className="fa-sharp fa-solid fa-star" />
                            </div>
                            1000+ happy clients
                        </FadeInUp>
                        <FadeInUp delay={0.6} className="title">
                            <h1>Best Luxury hotel <br />In the world.</h1>
                        </FadeInUp>
                        <FadeInUp delay={0.8} className="text">
                            <div>Discover the ultimate comfort and luxury with our handpicked selection <br />of hotels designed to make your stay unforgettable.</div>
                        </FadeInUp>
                        <FadeInUp delay={0.9} className="btn-box">
                            <Link href="/contact" className="theme-btn btn-style-two"><span className="btn-title">BOOK NOW</span></Link>
                        </FadeInUp>
                    </div>
                </div>
                <div className="images-column">
                    <FadeInRight delay={0.2} className="inner-column">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/banner2-2.jpg)' }}></div>
                    </FadeInRight>
                </div>
            </div>
        </section>

        </>
    );
}
export default Banner;