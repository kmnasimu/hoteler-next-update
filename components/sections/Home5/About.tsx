import React from 'react';

function About() {
    return (
        <>

        <section id='about' className="about-section-four pb-0">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="bg bg-image" style={{backgroundImage: 'url(images/icons/about1-bg1.png)'}}></div>
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="inner">
                                    <div className="sec-title">
                                        <span className="sub-title">Hoteler LUXURY HOTEL</span>
                                        <h2 className="words-slide-up text-split">We Provide Outdoor <br />Activities To All Visitors</h2>
                                    </div>
                                    <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer end-to-end logistics tailored for specific markets.</div>
                                    <ul className="list-style-two">
                                        <li><i className="icon fa fa-circle-check" />Introduce  best the revauto and their services.</li>
                                        <li><i className="icon fa fa-circle-check" />Highlight featured on revauto project.</li>
                                        <li><i className="icon fa fa-circle-check" />Revauto mission statement or philosophy.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-xl-5 col-lg-6 wow fadeInLeft" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image overlay-anim wow"><img src="images/resource/about4-1.jpg" alt="Image" /></figure>
                                    <figure className="image-2 overlay-anim"><img src="images/resource/about4-2.jpg" alt="Image" /></figure>
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
export default About