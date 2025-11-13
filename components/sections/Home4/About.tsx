import React from 'react';
import Link from 'next/link';

function About() {
    return (
        <>

        <section id='about' className="about-section">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title style-two">About us</span>
                                <h2>We Provide Outdoor <br />Activities To All</h2>
                                <div className="text-2">Our activities around the world and across various Hotel Service sectors.</div>
                                <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer end-to-end logistics tailored for specific markets.</div>
                            </div>
                            <ul className="list-style-two">
                                <li><i className="icon fa fa-circle-check" /> Introduce  best the revauto and their services.</li>
                                <li><i className="icon fa fa-circle-check" /> Highlight featured on revauto project.</li>
                                <li><i className="icon fa fa-circle-check" /> Revauto mission statement or philosophy.</li>
                            </ul>
                            <div className="btn-box">
                                <Link href="/page-about" className="theme-btn btn-style-four"><span className="btn-title">Discover More</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-md-8 col-lg-6">
                        <div className="inner-column wow fadeInLeft">
                            <figure className="image-1 overlay-anim wow "><img src="images/resource/about1-1.jpg" alt="" /></figure>
                            <figure className="image-2 overlay-anim wow "><img src="images/resource/about1-2.jpg" alt="" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default About