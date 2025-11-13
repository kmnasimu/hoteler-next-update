import React from 'react';
import Link from 'next/link';


function Banner() {
    return (
        <>

        <section id='about' className="banner-section-ten">
            <div className="bg bg-image" style={{backgroundImage: 'url(images/banner/banner6-1.jpg)'}}></div>
            <div className="outer-box">
                <div className="content-column col-lg-6 col-md-8">
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
                        <h1 className="title wow fadeInUp" data-wow-delay="300ms">Book Now Best Luxury Hotel In the world.</h1>
                        <div className="text wow fadeInUp" data-wow-delay="600ms">Experience unparalleled comfort and luxury with our carefully curated collection of hotels, crafted to ensure an unforgettable stay From world-class</div>
                    </div>
                    <div className="btn-box wow fadeInUp" data-wow-delay="800ms">
                        <Link href="/contact" className="theme-btn btn-style-two"><span className="btn-title">BOOK NOW</span></Link>
                        <div className="contact-info">
                            <div className="icon-box"><i className="flaticon-customer-service" /></div>
                            <span>BOOK NOW</span>
                            <h4 className="title">000 000 2222</h4>
                        </div>
                    </div>
                </div>
                <div className="banner-features">
                    <div className="feature-block">
                        <div className="inner">
                            <div className="icon"><img src="images/icons/icon-fitness-center.png" alt="" /></div>
                            <h6 className="title">Fitness Canter</h6>
                        </div>
                    </div>
                    <div className="feature-block">
                        <div className="inner">
                            <div className="icon"><img src="images/icons/icon-swimming1.png" alt="" /></div>
                            <h6 className="title">Swimming Pool</h6>
                        </div>
                    </div>
                    <div className="feature-block">
                        <div className="inner">
                            <div className="icon"><img src="images/icons/icon-wifi1.png" alt="" /></div>
                            <h6 className="title">Free WIFI</h6>
                        </div>
                    </div>
                    <div className="feature-block">
                        <div className="inner">
                            <div className="icon"><img src="images/icons/icon-restaurant1.png" alt="" /></div>
                            <h6 className="title">Restaurant centre</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Banner