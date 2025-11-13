import React from 'react';
import Link from 'next/link';


function Gallery() {
    return (
        <>

        <section className="gallery-section-one pb-0">
            <div className="container-fluid py-0">
                <div className="sec-title text-center wow fadeInUp">
                    <span className="sub-title">Hoteler Luxury Rooms</span>
                    <h2>Luxury Rooms & Suites</h2>
                </div>
                <div className="row">
                    <div className="gallery-block-one col-lg-6 col-md-6 wow fadeInUp">
                        <div className="inner-box mb-20">
                            <div className="image-box">
                                <figure className="image"><Link href="/room-details"><img className="w-100" src="images/resource/gallery-1.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href="/room-details">Family Room</Link></h4>
                                <Link href="/room-details" className="theme-btn"><span className="btn-title">PRE - BOOKING</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-block-one col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="inner-box mb-20">
                            <div className="image-box">
                                <figure className="image"><Link href="/room-details"><img className="w-100" src="images/resource/gallery-2.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href="/room-details">Family Room</Link></h4>
                                <Link href="/room-details" className="theme-btn"><span className="btn-title">PRE - BOOKING</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-block-one col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box mb-20">
                            <div className="image-box">
                                <figure className="image"><Link href="/room-details"><img className="w-100" src="images/resource/gallery-3.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href="/room-details">Family Room</Link></h4>
                                <Link href="/room-details" className="theme-btn"><span className="btn-title">PRE - BOOKING</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-block-one col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box mb-20">
                            <div className="image-box">
                                <figure className="image"><Link href="/room-details"><img className="w-100" src="images/resource/gallery-4.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href="/room-details">Family Room</Link></h4>
                                <Link href="/room-details" className="theme-btn"><span className="btn-title">PRE - BOOKING</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-block-one col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div className="inner-box mb-20">
                            <div className="image-box">
                                <figure className="image"><Link href="/room-details"><img className="w-100" src="images/resource/gallery-5.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href="/room-details">Family Room</Link></h4>
                                <Link href="/room-details" className="theme-btn"><span className="btn-title">PRE - BOOKING</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-block-one col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box mb-20">
                            <div className="image-box">
                                <figure className="image"><Link href="/room-details"><img className="w-100" src="images/resource/gallery-6.jpg" alt="" /></Link></figure>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href="/room-details">Family Room</Link></h4>
                                <Link href="/room-details" className="theme-btn"><span className="btn-title">PRE - BOOKING</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

export default Gallery;