'use client';

import React from 'react';
import Link from 'next/link';


function About2() {
    return (
        <>

        <section className="about-section-seven">
            <div className="auto-container">
                <h2 className="title-stroke wow fadeInRight" data-wow-delay="500ms">Hoteler</h2>
                <div className="row">
                    <div className="content-column col-lg-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title style-three">HOTELER SERVICE</span>
                                <h2>ESSENTIAL SERVICES</h2>
                                <div className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec.</div>
                            </div>
                            <div className="outer-box row">
                                <div className="info-block col-sm-5">
                                    <div className="inner d-flex align-items-center">
                                        <div className="icon-box"><i className="flaticon-light" /></div>
                                        <h4 className="title ms-3">Finding Hotels</h4>
                                    </div>
                                </div>
                                <div className="info-block col-sm-6">
                                    <div className="inner d-flex align-items-center">
                                        <div className="icon-box"><i className="flaticon-swimming-pool" /></div>
                                        <h4 className="title ms-3">Recommendations</h4>
                                    </div>
                                </div>
                                <div className="info-block col-sm-5">
                                    <div className="inner d-flex align-items-center">
                                        <div className="icon-box"><i className="flaticon-travel" /></div>
                                        <h4 className="title ms-3">Booking Platforms</h4>
                                    </div>
                                </div>
                                <div className="info-block col-sm-6">
                                    <div className="inner d-flex align-items-center">
                                        <div className="icon-box"><i className="flaticon-wifi" /></div>
                                        <h4 className="title ms-3">Local Deals</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link href="/contact" className="theme-btn btn-style-one"><span className="btn-title">Book Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-md-8 col-lg-6">
                        <div className="inner-column wow fadeInLeft">
                            <figure className="image-1 overlay-anim wow"><img src="images/resource/about7-1.jpg" alt="" /></figure>
                            <figure className="image-2 overlay-anim wow"><img src="images/resource/about7-2.jpg" alt="" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default About2