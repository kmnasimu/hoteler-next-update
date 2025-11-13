import React from 'react';
import Link from 'next/link';


function Features() {
    return (
        <>

        <section className="features-section">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title mb-0"> <span className="sub-title">Experience Hoteler</span>
                                    <h2 className="words-slide-up text-split">We are here to help you get Hoteler</h2>
                                    <div className="text">Appareat reformidans his te. Mundi erroribus ad eum, mea ut dicam nostro  copiosae. Eligendi accusamus</div>
                                </div>
                                <div className="bottom-box">
                                    <div className="author-box">
                                        <div className="inner">
                                            <div className="author-info">
                                                <img src="images/resource/sign.png" alt="Signature" />
                                                <div className="name">Alen Hispro</div>
                                                <div className="designation">CEO, Hoteler</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features-column col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="feature-block">
                                    <div className="inner-box">
                                        <div className="box-number">01</div>
                                        <div className="icon-box"><i className="icon flaticon-bed-2" /></div>
                                        <div className="content-box">
                                            <h4 className="title">The Health Club & Pool</h4>
                                            <Link className="read-more" href="/page-about">READ MORE</Link>
                                            <div className="bg-image" style={{backgroundImage: 'url(images/resource/feature1-1.jpg)'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-block">
                                    <div className="inner-box">
                                        <div className="box-number">02</div>
                                        <div className="icon-box"><i className="icon flaticon-travel" /></div>
                                        <div className="content-box">
                                            <h4 className="title">Historic Restaurent Renovation</h4>
                                            <Link className="read-more" href="/page-about">READ MORE</Link>
                                            <div className="bg-image" style={{backgroundImage: 'url(images/resource/feature1-1.jpg)'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-block">
                                    <div className="inner-box">
                                        <div className="box-number">03</div>
                                        <div className="icon-box"><i className="icon flaticon-car" /></div>
                                        <div className="content-box">
                                            <h4 className="title">Lifetime Achievement 2021</h4>
                                            <Link className="read-more" href="/page-about">READ MORE</Link>
                                            <div className="bg-image" style={{backgroundImage: 'url(images/resource/feature1-1.jpg)'}}></div>
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
    );
}

export default Features;