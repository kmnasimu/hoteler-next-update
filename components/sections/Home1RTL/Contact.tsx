"use client";
import React from 'react';
import Link from 'next/link';


function Contact() {
    return (
        <>
            
        <section id='contact' className="contact-section">
            <div className="bg bg-image wow tm-gsap-img-parallax overflow-hidden">
                <img src="images/background/bg-contact5.jpg" alt="Image" />
            </div>
            <div className="icon icon-contact-shape1" style={{ backgroundImage: 'url(images/icons/shape-4.png)' }}></div>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row justify-content-end">
                        <div className="form-column col-lg-8">
                            <div className="inner-column">
                                <div className="contact-form wow fadeInLeft">
                                    <div className="icon-anchor-1 bounce-y"></div>
                                    <div className="sec-title">
                                        <span className="sub-title style-three">اتصل بنا</span>
                                        <h2>تواصل معنا</h2>
                                    </div>
                                    <form method="post" action="get" id="contact-form">
                                        <div className="row">
                                            <div className="form-group col-lg-6 col-md-6">
                                                <input type="text" name="name" placeholder="اسمك" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6">
                                                <input type="email" name="email" placeholder="عنوان البريد الإلكتروني" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6">
                                                <input type="tex" name="phone" placeholder="تحقق في" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6">
                                                <input type="text" name="subject" placeholder="الدفع" required />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <textarea name="textarea" placeholder="اكتب رسالة" rows={2}></textarea>
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <button type="submit" className="theme-btn btn-style-one bg-dark" name="submit-form"><span className="btn-title">التحقق من التوفر</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="contact-block">
                                    <div className="inner-box">
                                        <figure className="image icon-contact1"><img src="images/icons/icon-call-2.png" alt="Image" /></figure>
                                        <div className="content-box">
                                            <figure className="icon-img"><img src="images/icons/icon-call-1.png" alt="" /></figure>
                                            <span className="text">اتصل بنا لأي استفسار</span>
                                            <Link href="tel:+8801750050088" className="text-two">(۸۰۱) ۵۰۰ ۵۰ ۰۸۸</Link>
                                        </div>
                                    </div>
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
export default Contact