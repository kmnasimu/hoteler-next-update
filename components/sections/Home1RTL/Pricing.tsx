"use client";
import React from 'react';
import Link from 'next/link';


function Pricing() {
    return (
        <>
            
            <section className="pricing-section">
                <div className="auto-container">
                    <div className="sec-title text-center wow fadeInUp">
                        <span className="sub-title">أفضل قوائم الطعام في فندق هوتيلر</span>
                        <h2>أطعمة متخصصة فريدة من نوعها</h2>
                    </div>
                    <div className="row gx-xl-5 wow slideInUp">
                        <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="thumb overlay-anim"><Link href="/page-pricing"><img src="images/resource/pricing2-1.png" alt="" /></Link></figure>
                                <div className="content-box">
                                    <h6 className="title">باستا مع السمك<span>$۳۹</span></h6>
                                    <span className="designation">لوريم إيبسوم هو أنه يبدو</span>
                                </div>
                                <span className="food-pack">بداية</span>
                            </div>
                        </div>
                        <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="thumb overlay-anim"><Link href="/page-pricing"><img src="images/resource/pricing2-2.png" alt="" /></Link></figure>
                                <div className="content-box">
                                    <h6 className="title">نودلز<span>$۱۶</span></h6>
                                    <span className="designation">لوريم إيبسوم هو أنه يبدو</span>
                                </div>
                                <span className="food-pack">جديد</span>
                            </div>
                        </div>
                        <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="thumb overlay-anim"><Link href="/page-pricing"><img src="images/resource/pricing2-3.png" alt="" /></Link></figure>
                                <div className="content-box">
                                    <h6 className="title">اللحوم الطازجة<span>$۲۶</span></h6>
                                    <span className="designation">لوريم إيبسوم هو أنه يبدو</span>
                                </div>
                                <span className="food-pack">جديد</span>
                            </div>
                        </div>
                        <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="thumb overlay-anim"><Link href="/page-pricing"><img src="images/resource/pricing2-4.png" alt="" /></Link></figure>
                                <div className="content-box">
                                    <h6 className="title">فرخة<span>$۱۹</span></h6>
                                    <span className="designation">لوريم إيبسوم هو أنه يبدو</span>
                                </div>
                                <span className="food-pack">نباتي</span>
                            </div>
                        </div>
                        <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="thumb overlay-anim"><Link href="/page-pricing"><img src="images/resource/pricing2-5.png" alt="" /></Link></figure>
                                <div className="content-box">
                                    <h6 className="title">معكرونة<span>$۳۷</span></h6>
                                    <span className="designation">لوريم إيبسوم هو أنه يبدو</span>
                                </div>
                                <span className="food-pack">new</span>
                            </div>
                        </div>
                        <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="thumb overlay-anim"><Link href="/page-pricing"><img src="images/resource/pricing2-6.png" alt="" /></Link></figure>
                                <div className="content-box">
                                    <h6 className="title">نباتي مقلي<span>$۳۴</span></h6>
                                    <span className="designation">لوريم إيبسوم هو أنه يبدو</span>
                                </div>
                                <span className="food-pack">new</span>
                            </div>
                        </div>
                        <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="thumb overlay-anim"><Link href="/page-pricing"><img src="images/resource/pricing2-7.png" alt="" /></Link></figure>
                                <div className="content-box">
                                    <h6 className="title">شوربة نباتية<span>$۴۲</span></h6>
                                    <span className="designation">لوريم إيبسوم هو أنه يبدو</span>
                                </div>
                                <span className="food-pack">خالي من الغلوتين</span>
                            </div>
                        </div>
                        <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <figure className="thumb overlay-anim"><Link href="/page-pricing"><img src="images/resource/pricing2-8.png" alt="" /></Link></figure>
                                <div className="content-box">
                                    <h6 className="title">باستا السلمون<span>$۷۱</span></h6>
                                    <span className="designation">لوريم إيبسوم هو أنه يبدو</span>
                                </div>
                                <span className="food-pack">سمكة</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Pricing