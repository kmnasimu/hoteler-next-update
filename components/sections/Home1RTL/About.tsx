"use client";
import React from 'react';
import Link from 'next/link';


function About() {
    return (
        <>
            <section id='about' className="about-section-two pt-0">
                <div className="anim-icons">
                    <img className="image-1" src="images/icons/icon-home1.png" alt="" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-7 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title style-three">فندق فاخر</span>
                                    <h2>نقدم أنشطة خارجية <br />لجميع الزوار</h2>
                                    <div className="text">تتميز سان فرانسيسكو بتلالها ذات المناظر الخلابة والساحل والطعام الممتاز، وقد تم اختيارها كأسعد وأصح وأكثر المدن لياقة في الولايات المتحدة عدة مرات.</div>
                                </div>
                                <div className="outer-box">
                                    <div className="info-block">
                                        <div className="inner">
                                        <div className="icon-box"><i className="flaticon-light" /></div>
                                        <h4 className="title">أفضل<br />إضاءة</h4>
                                        </div>
                                    </div>
                                    <div className="info-block">
                                        <div className="inner">
                                        <div className="icon-box"><i className="flaticon-pool" /></div>
                                        <h4 className="title">أفضل<br />سباحة</h4>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-style-two">
                                    <li><i className="icon fa fa-circle-check" />حقيقة معروفة منذ زمن طويل وهي أن المحتوى المقروء سيشتت انتباه القارئ</li>
                                    <li><i className="icon fa fa-circle-check" />لوريم إيبسوم هو ببساطة نص شكلي للطباعة والنشر</li>
                                    <li><i className="icon fa fa-circle-check" />هناك العديد من الأشكال المختلفة من نصوص لوريم إيبسوم</li>
                                </ul>
                                <div className="btn-box">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">اكتشف المزيد</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="image-column col-md-7 col-lg-5">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow "><img src="images/resource/about2-1.jpg" alt="" /></figure>
                                <figure className="image-2 overlay-anim wow "><img src="images/resource/about2-2.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About