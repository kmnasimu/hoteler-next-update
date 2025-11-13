import React from 'react';
import Link from 'next/link';

function Pricing() {
    return (
        <>

        <section className="pricing-section-three">
            <div className="auto-container">
                <div className="pricing-block-three home4-style">
                    <div className="inner-box content-align-right">
                        <div className="row">
                            <div className="content-column col-lg-4 col-md-6">
                                <div className="inner-column wow fadeInLeft">
                                    <span className="pricing-amount">$350<span>/ Night</span></span>
                                    <h3 className="pricing-title">Double Room</h3>
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
                            <div className="image-column col-lg-8 col-md-6">
                                <div className="image-box">
                                    <figure className="image wow"><img src="images/resource/pricing3-1.jpg" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing-block-three mb-0">
                    <div className="inner-box">
                        <div className="row">
                            <div className="content-column col-lg-4 col-md-6">
                                <div className="inner-column wow fadeInLeft">
                                    <span className="pricing-amount">$250<span>/ Night</span></span>
                                    <h3 className="pricing-title">Family Room</h3>
                                    <div className="list-box">
                                        <ul className="list-style-two">
                                            <li><i className="icon fa fa-circle-check" /> 1-2 Persons</li>
                                            <li><i className="icon fa fa-circle-check" /> King Size Bed</li>
                                        </ul>
                                        <ul className="list-style-two">
                                            <li><i className="icon fa fa-circle-check" /> Bathtub</li>
                                            <li><i className="icon fa fa-circle-check" /> Free Wifi</li>
                                        </ul>
                                    </div>
                                    <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet et vivamus nostra torquent porttitor</div>
                                    <div className="btn-box">
                                        <Link href="/page-pricing" className="btn-style-four">Book Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="image-column col-lg-8 col-md-6">
                                <div className="image-box">
                                    <figure className="image wow"><img src="images/resource/pricing3-2.jpg" alt="" /></figure>
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