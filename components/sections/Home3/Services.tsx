"use client";

import React from 'react';
import Link from 'next/link';

function Services() {
    return (
        <>

        <section id='services' className="services-section-five">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        <div className="service-block-five col-lg-3 col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <div className="bg-image" style={{backgroundImage:'url(images/resource/service2-1.jpg)'}}></div>
                                </div>
                                <div className="content-box">
                                    <figure className="icon mb-0"><img src="images/icons/icon-leaf1.png" alt="Image" /></figure>
                                    <h3 className="title"><Link href="/room-details">Body Message</Link></h3>
                                    <div className="text">Lorem ipsum dolor sit amet overflow hidden</div>
                                </div>
                            </div>
                        </div>
                        <div className="service-block-five col-lg-3 col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <div className="bg-image" style={{backgroundImage:'url(images/resource/service2-2.jpg)'}}></div>
                                </div>
                                <div className="content-box">
                                    <figure className="icon mb-0"><img src="images/icons/icon-leaf2.png" alt="Image" /></figure>
                                    <h3 className="title"><Link href="/room-details">Body Treatments</Link></h3>
                                    <div className="text">Lorem ipsum dolor sit amet overflow hidden</div>
                                </div>
                            </div>
                        </div>
                        <div className="service-block-five col-lg-3 col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <div className="bg-image" style={{backgroundImage:'url(images/resource/service2-1.jpg)'}}></div>
                                </div>
                                <div className="content-box">
                                    <figure className="icon mb-0"><img src="images/icons/icon-leaf1.png" alt="Image" /></figure>
                                    <h3 className="title"><Link href="/room-details">Spa Waxing</Link></h3>
                                    <div className="text">Lorem ipsum dolor sit amet overflow hidden</div>
                                </div>
                            </div>
                        </div>
                        <div className="service-block-five col-lg-3 col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <div className="bg-image" style={{backgroundImage:'url(images/resource/service2-2.jpg)'}}></div>
                                </div>
                                <div className="content-box">
                                    <figure className="icon mb-0"><img src="images/icons/icon-leaf3.png" alt="Image" /></figure>
                                    <h3 className="title"><Link href="/room-details">Facial Scrap</Link></h3>
                                    <div className="text">Lorem ipsum dolor sit amet overflow hidden</div>
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
export default Services
