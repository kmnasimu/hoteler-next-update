"use client";

import React from 'react';

function Contact() {
    return (
        <>

        <section id='contact' className="contact-section style-four pb-0">
            <div className="bg bg-image" style={{backgroundImage: 'url(images/background/bg-contact4.jpg)'}}></div>
            <div className="outer-box">
                <div className="row">
                    <div className="content-column col-lg-7 col-xl-6">
                        <div className="inner-column">
                            <h3 className="title">Benefits if you Schedule An Appointment</h3>
                            <div className="row">
                                <div className="col-md-5">
                                    <ul className="list-style-two">
                                        <li><i className="icon fa-solid fa-check" /> Pick & Drop Service</li>
                                        <li><i className="icon fa-solid fa-check" /> Swimming Pool</li>
                                        <li><i className="icon fa-solid fa-check" /> City Tour Guide</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-style-two ps-xl-4">
                                        <li><i className="icon fa-solid fa-check" /> Fibre Internet</li>
                                        <li><i className="icon fa-solid fa-check" /> Book Flights Online</li>
                                        <li><i className="icon fa-solid fa-check" /> Book Hotel Rooms</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="contact-block-box">
                                <div className="row">
                                    <div className="contact-block-two col-md-5">
                                        <div className="inner-box">
                                            <div className="content-box">
                                                <div className="icon-box"><i className="icon fa-light fa-envelope" /></div>
                                                <h4 className="icon-title">Contact Us</h4>
                                                <div className="text-two">Email: Medicrosshealth@gmail.com</div>
                                                <div className="text-two"><span className="text-white">Call Us 24h:</span> +1 800-123-1234</div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="contact-block-two col-md-6">
                                        <div className="inner-box ps-xl-4">
                                            <div className="content-box">
                                                <div className="icon-box"><i className="icon fa-regular fa-location-dot" /></div>
                                                <h4 className="icon-title">Address Medical</h4>
                                                <div className="text-two">8502 Preston Rd. Inglewood, Maine 98380</div>
                                                <div className="text-two"><span className="text-white">Opening Hours:</span> 7.00am – 19.00pm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-column col-lg-5 col-xl-6">
                        <div className="inner-column">
                            <div className="contact-form wow fadeInLeft">
                                <div className="icon-anchor-1 bounce-y" />
                                <div className="sec-title text-center">
                                    <h2>For any inquiry, get in touch with us</h2>
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
                                            <input type="tex" name="phone" placeholder="Phone Number" required />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6">
                                            <input type="text" name="subject" placeholder="Choose Service" required />
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
            </div>
        </section>

        </>
    )
}
export default Contact
