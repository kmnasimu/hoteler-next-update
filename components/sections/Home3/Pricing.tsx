"use client";

import React from 'react';
import Link from 'next/link';

function Pricing() {
    return (
        <>

        <section className="pricing-section style-two">
            <div className="anim-icons">
                <img className="image-4" src="images/icons/shape-22.png" alt="" />
                <img className="image-3" src="images/icons/shape-21.png" alt="" />
            </div>
            <div className="auto-container">
                <div className="pricing-block">
                    <div className="inner-box">
                        <div className="row">
                            <div className="image-column col-lg-6 col-md-6">
                                <div className="inner-column">
                                    <div className="text wow fadeInLeft" data-wow-delay="300ms">LUXURY HOTEL</div>
                                    <div className="image-box">
                                        <figure className="image-1 overlay-anim wow "><img src="images/resource/pricing1-1.jpg" alt="" /></figure>
                                        <figure className="image-2 overlay-anim wow "><img src="images/resource/pricing1-2.jpg" alt="" /></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="content-column col-lg-6 col-md-6">
                                <div className="inner-column wow fadeInLeft" data-wow-delay="300ms">
                                    <h2 className="pricing-title">Double Room Suite</h2>
                                    <span className="pricing-amount">$250<span>/ Night</span></span>
                                    <div className="list-box">
                                        <ul className="list-style-two">
                                            <li><i className="icon fa fa-circle-check" /> Pick & Drop Service</li>
                                            <li><i className="icon fa fa-circle-check" /> Swimming Pool</li>
                                        </ul>
                                        <ul className="list-style-two">
                                            <li><i className="icon fa fa-circle-check" /> City Tour Guide</li>
                                            <li><i className="icon fa fa-circle-check" /> Fibre Internet</li>
                                        </ul>
                                    </div>
                                    <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet et vivamus nostra torquent porttitor</div>
                                    <div className="btn-box">
                                        <Link href="/page-pricing" className="btn-style-four">Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing-block mb-0">
                    <div className="inner-box content-align-left">
                        <div className="row">
                            <div className="image-column col-lg-6 col-md-6">
                                <div className="inner-column">
                                    <div className="text wow fadeInLeft" data-wow-delay="300ms">LUXURY HOTEL</div>
                                    <div className="image-box">
                                        <figure className="image-1 overlay-anim wow "><img src="images/resource/pricing1-3.jpg" alt="" /></figure>
                                        <figure className="image-2 overlay-anim wow "><img src="images/resource/pricing1-4.jpg" alt="" /></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="content-column col-lg-6 col-md-6">
                                <div className="inner-column wow fadeInLeft" data-wow-delay="300ms">
                                    <h2 className="pricing-title">Couple Room Suite</h2>
                                    <span className="pricing-amount">$250<span>/ Night</span></span>
                                    <div className="list-box">
                                        <ul className="list-style-two">
                                            <li><i className="icon fa fa-circle-check" /> Pick & Drop Service</li>
                                            <li><i className="icon fa fa-circle-check" /> Swimming Pool</li>
                                        </ul>
                                        <ul className="list-style-two">
                                            <li><i className="icon fa fa-circle-check" /> City Tour Guide</li>
                                            <li><i className="icon fa fa-circle-check" /> Fibre Internet</li>
                                        </ul>
                                    </div>
                                    <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet et vivamus nostra torquent porttitor</div>
                                    <div className="btn-box">
                                        <Link href="/page-pricing" className="btn-style-four">Book Now</Link>
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
export default Pricing
