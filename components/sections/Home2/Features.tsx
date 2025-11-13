'use client';

import React from 'react';
import Link from 'next/link';

function Features() {
    return (
        <>

        <section id='services' className="feature-section-four">
            <div className="container">
                <div className="outer-box">
                    <div className="row align-items-center"> 
                        <div className="col-lg-4">
                            <div className="sec-title">
                                <span className="sub-title style-three">HOTELER HOTEL</span>
                                <h2>Your Ideal Stay Our Priority</h2>
                                <div className="text">Hoteler in a powerful way of just not an only professions, however, in a passion for our company.</div>
                                <div className="btn-box">
                                    <Link href="/room-details" className="theme-btn btn-style-two"><span className="btn-title">Discover More</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="outer-box">
                                <div className="row">
                                    <div className="feature-block-four col-lg-4 col-sm-6 wow fadeIn" data-wow-delay="100ms">
                                        <div className="inner-box">
                                            <figure className="image"><img src="images/resource/feature3-1.jpg" alt="" /></figure>
                                            <div className="content-box">
                                                <h4 className="title"><Link href="/room-details">Pre - Booking</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature-block-four col-lg-4 col-sm-6 wow fadeIn" data-wow-delay="200ms">
                                        <div className="inner-box">
                                            <figure className="image"><img src="images/resource/feature3-2.jpg" alt="" /></figure>
                                            <div className="content-box">
                                                <h4 className="title"><Link href="/room-details">Swimming Pool</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature-block-four col-lg-4 col-sm-6 wow fadeIn" data-wow-delay="300ms">
                                        <div className="inner-box">
                                            <figure className="image"><img src="images/resource/feature3-3.jpg" alt="" /></figure>
                                            <div className="content-box">
                                                <h4 className="title"><Link href="/room-details">Buffet Dinner</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Features