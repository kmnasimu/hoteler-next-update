"use client";
import React from 'react';
import Link from 'next/link';


function Room() {
    return (
        <>

        <section id='projects' className="room-service-section pt-120 pb-60">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">خدمة العملاء</span>
                    <h2>احجز إقامتك و <br />الاسترخاء في الفخامة</h2>
                </div>
                <div className="row">
                    <div className="room-service-block-one col-lg-4 col-sm-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image mb-0"><Link href="/room-details"><img src="images/resource/room-service1-1.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="inner-box">
                                    <h4 className="title"><Link href="/room-details">جناح جونيور</Link></h4>
                                    <div className="price">$۱۵۰/ ليلة</div>
                                </div>
                                <div className="facilities-box align-items-center d-flex justify-content-between">
                                    <ul className="facilities-list">
                                        <li><i className="fal fa-circle-user me-2" />۱-۲ الأشخاص</li>
                                        <li><i className="fal fa-bed me-2" /> سرير بحجم كينغ</li>
                                    </ul>
                                    <ul className="facilities-list">
                                        <li><i className="fal fa-bath me-2" /> حوض الاستحمام</li>
                                        <li><i className="fal fa-wifi me-2" />  حر خدمة الا</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="room-service-block-one col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image mb-0"><Link href="/room-details"><img src="images/resource/room-service1-2.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="inner-box">
                                    <h4 className="title"><Link href="/room-details">جناح عائلي</Link></h4>
                                    <div className="price">$۲۵۰/ ليلة</div>
                                </div>
                                <div className="facilities-box align-items-center d-flex justify-content-between">
                                    <ul className="facilities-list">
                                        <li><i className="fal fa-circle-user me-2" />۱-۲ الأشخاص</li>
                                        <li><i className="fal fa-bed me-2" /> سرير بحجم كينغ</li>
                                    </ul>
                                    <ul className="facilities-list">
                                        <li><i className="fal fa-bath me-2" /> حوض الاستحمام</li>
                                        <li><i className="fal fa-wifi me-2" />  حر خدمة الا</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="room-service-block-one col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image mb-0"><Link href="/room-details"><img src="images/resource/room-service1-3.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <div className="inner-box">
                                    <h4 className="title"><Link href="/room-details">جناح رجال الأعمال</Link></h4>
                                    <div className="price">$۵۵۰/ ليلة</div>
                                </div>
                                <div className="facilities-box align-items-center d-flex justify-content-between">
                                    <ul className="facilities-list">
                                        <li><i className="fal fa-circle-user me-2" />۱-۲ الأشخاص</li>
                                        <li><i className="fal fa-bed me-2" /> سرير بحجم كينغ</li>
                                    </ul>
                                    <ul className="facilities-list">
                                        <li><i className="fal fa-bath me-2" /> حوض الاستحمام</li>
                                        <li><i className="fal fa-wifi me-2" />  حر خدمة الا</li>
                                    </ul>
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
export default Room