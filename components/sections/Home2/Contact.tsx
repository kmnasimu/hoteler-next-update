'use client';

import React from 'react';

function Contact() {
    return (
        <>

        <section id='contact' className="contact-section style-three">
            <div className="bg bg-image wow tm-gsap-img-parallax overflow-hidden">
                <img className="img-fit-cover w-100" src="images/background/bg-contact6.jpg" alt="" />
            </div>
            <div className="outer-box">
                <div className="form-column">
                    <div className="inner-column">
                        <div className="contact-form wow fadeInLeft">
                            <div className="icon-anchor-1 bounce-y" />
                            <div className="sec-title">
                                <span className="sub-title style-three">Contact Us</span>
                                <h2>Get in Touch</h2>
                            </div>
                            <form method="post" action="get" id="contact-form">
                                <div className="row">
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="text" name="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="email" name="email" placeholder="Email Address" required />
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="tex" name="phone" placeholder="Check In" required />
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6">
                                        <input type="text" name="subject" placeholder="Check Out" required />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <textarea name="textarea" placeholder="Write a Message" rows={2}></textarea>
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <button type="submit" className="theme-btn btn-style-two" name="submit-form"><span className="btn-title">Submit now</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Contact