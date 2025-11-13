import React from 'react';
import Link from 'next/link';

function About2() {
    return (
        <>

        <section id='about' className="about-section-three">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">Hoteler LUXURY HOTEL</span>
                                <h2>Experience unparalleled comfort</h2>
                                <div className="text">Hoteler in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website.</div>
                            </div>
                            <div className="btn-box">
                                <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></Link>
                            </div>
                            <div className="image-1"><figure className="mb-0 overlay-anim wow tm-gsap-img-parallax overflow-hidden"><img src="images/resource/about3-2.jpg" alt="" /></figure></div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6">
                        <div className="inner-column wow fadeInLeft">
                            <div className="image-1"><figure className="mb-0 overlay-anim wow tm-gsap-img-parallax overflow-hidden"><img src="images/resource/about3-1.jpg" alt="" /></figure></div>
                            <div className="text">We've been in the industry for over two decades now. Consequently, some of our partnerships have stood the test of time, much like some of our colleagues.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default About2