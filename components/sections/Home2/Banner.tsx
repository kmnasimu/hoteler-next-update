'use client';

import React from 'react'
import Link from 'next/link'

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
                        <div className="offer-text wow fadeInUp" data-wow-delay="300ms">
                            <div className="star-rating">
                                <i className="fa-sharp fa-solid fa-star" />
                                <i className="fa-sharp fa-solid fa-star" />
                                <i className="fa-sharp fa-solid fa-star" />
                                <i className="fa-sharp fa-solid fa-star" />
                                <i className="fa-sharp fa-solid fa-star" />
                            </div>
                            1000+ happy clients
                        </div>
                        <h1 className="title wow fadeInUp" data-wow-delay="600ms">Best Luxury hotel <br />In the world.</h1>
                        <div className="text wow fadeInUp" data-wow-delay="800ms">Discover the ultimate comfort and luxury with our handpicked selection <br />of hotels designed to make your stay unforgettable.</div>
                        <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                            <Link href="/contact" className="theme-btn btn-style-two"><span className="btn-title">BOOK NOW</span></Link>
                        </div>
                    </div>
                </div>
                <div className="images-column">
                    <div className="inner-column wow fadeInRight" data-wow-delay="200ms">
                        <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/banner2-2.jpg)' }}></div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Banner