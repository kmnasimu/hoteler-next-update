import React from 'react';
import Link from 'next/link';

function About() {
    return (
        <>

        <section id='about' className="about-section-ten">
            <div className="container">
                <div className="row">
                    <div className="content-column col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title style-three">ABOUT Hoteler</span>
                                <h2>Experience the Pinnacle <br />of Hospitality</h2>
                                <div className="text">San Francisco has hills with views, the coast, excellent food & has been voted the happiest, healthiest and fittest city in the States many times.</div>
                            </div>
                            <div className="outer-box">
                                <div className="info-block">
                                    <div className="inner">
                                        <div className="icon-box"><i className="flaticon-light" /></div>
                                        <h6 className="title">The Best <br />Lighting</h6>
                                    </div>
                                </div>
                                <div className="info-block">
                                    <div className="inner">
                                        <div className="icon-box"><i className="flaticon-pool" /></div>
                                        <h6 className="title">The Best <br />Swiming</h6>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-style-two">
                                <li><i className="icon fa fa-circle-check" />It is a long fact that a reader will be distracted by the readable</li>
                                <li><i className="icon fa fa-circle-check" />Lorem Ipsum is simply dummy of the printing and industry</li>
                                <li><i className="icon fa fa-circle-check" />There are many variations of Lorem Ipsum majority</li>
                            </ul>
                            <div className="btn-box">
                                <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-md-7 col-lg-6">
                        <div className="inner-column wow fadeInLeft">
                            <figure className="image-1 overlay-anim wow"><img src="images/resource/about10-1.jpg" alt="" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default About