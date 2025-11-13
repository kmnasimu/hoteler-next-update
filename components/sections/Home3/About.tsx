"use client";

import React from 'react';
import Link from 'next/link';

function About() {
    return (
        <>

        <section className="about-section-nine pb-0" id='about'>
            <div className="container">
                <div className="outer-box">
                    <div className="row">
                        <div className="content-column col-lg-5">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>Your Journey Begins with Our Booking</h2>
                                    <div className="text">The main areas of work are architectural design, interior design, project completion, industrial design, ceramic production of decorative items and furniture.</div>
                                </div>
                                <div className="btn-box">
                                    <Link href="/page-about" className="theme-btn btn-style-two"><span className="btn-title">Discover More</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-lg-7">
                            <div className="inner-column">
                                <figure className="image-1 overlay-anim wow">
                                    <img src="images/resource/about9-1.jpg" alt="" />
                                </figure>
                                <figure className="image-2 wow">
                                    <img src="images/resource/about9-2.jpg" alt="" />
                                    <img src="images/resource/about9-3.jpg" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-image wow">
                <img src="images/background/bg3.jpg" alt="" />
            </div>
        </section>

        </>
    )
}
export default About
