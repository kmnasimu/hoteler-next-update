"use client";
import React from 'react';
import Link from 'next/link';


function Services() {
    return (
        <>

        <section id='services' className="service-section-three">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">ما نقدمه</span>
                    <h2>احصل على عرضنا الخاص.</h2>
                </div>
                <div className="outer-box">
                    <div className="row">
                        <div className="service-block-three col-lg-4 col-md-6 wow fadeInUp">
                            <div className="inner-box">
                                <figure className="image"><img src="images/resource/service1-1.jpg" alt="" /></figure>
                                <div className="content-box">
                                    <h6 className="title"><Link href="/room-details">خصم عائلي</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="service-block-three col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="inner-box">
                                <figure className="image"><img src="images/resource/service1-2.jpg" alt="" /></figure>
                                <div className="content-box">
                                    <h6 className="title"><Link href="/room-details">عرض الأزواج</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="service-block-three col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box">
                                <figure className="image"><img src="images/resource/service1-3.jpg" alt="" /></figure>
                                <div className="content-box">
                                    <h6 className="title"><Link href="/room-details">اشتري واحد واحصل على واحد مجانًا</Link></h6>
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
