import React from 'react';
import Link from 'next/link';

interface Features2Props {
    className?: string;
}

function Features2({ className = '' }: Features2Props) {
    return (
        <>

        <section className={`feature-section-two ${className || ''}`}>
            <div className="auto-container">
                <div className="row feature-row g-0">
                    <div className="image-column col-lg-6">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image overlay-anim wow"><img src="images/resource/feature2-1.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                    <div className="content-column col-lg-6" >
                        <div className="inner-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <span className="sub-title">DISCOVER</span>
                                    <h2>The Restaurant</h2>
                                    <div className="text">With the largest fleet of luxury catamarans, sailing and motor yachts in Santorini we guarantee the ultimate sailing experience!</div>
                                </div>
                                <Link href="/room-details" className="theme-btn btn-style-two read-more">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row feature-row g-0">
                    <div className="content-column col-lg-6">
                        <div className="inner-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <span className="sub-title">EXPERIENCE</span>
                                    <h2>Spa Center</h2>
                                    <div className="text">With the largest fleet of luxury catamarans, sailing and motor yachts in Santorini we guarantee the ultimate sailing experience!</div>
                                </div>
                                <Link href="/room-details" className="theme-btn btn-style-two read-more">READ MORE</Link>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-6">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image overlay-anim wow"><img src="images/resource/feature2-2.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row feature-row g-0">
                    <div className="image-column col-lg-6">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image overlay-anim wow"><img src="images/resource/feature2-3.jpg" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                    <div className="content-column col-lg-6">
                        <div className="inner-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <span className="sub-title">MODERN</span>
                                    <h2>Fitness Center</h2>
                                    <div className="text">With the largest fleet of luxury catamarans, sailing and motor yachts in Santorini we guarantee the ultimate sailing experience!</div>
                                </div>
                                <Link href="/room-details" className="theme-btn btn-style-two read-more">READ MORE</Link>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>
        </section>

        </>
    );
}

export default Features2;