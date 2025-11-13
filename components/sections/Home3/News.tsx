"use client";

import React from 'react';
import Link from 'next/link';


function News({ className }: { className?: string }) {
    return (
        <>

        <section className={`news-section ${className || ''}`} id='news'>
            <div className="auto-container">
                <div className="sec-title text-center wow fadeInUp">
                    <span className="sub-title">NEWS & BLOG</span>
                    <h2>Check Latest Blog Post <br />from Blog List</h2>
                </div>
                <div className="row">
                    <div className="news-block-four col-lg-4 col-md-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="/news-details">
                                        <img src="images/resource/news1-1.jpg" alt="Image" />
                                        <img src="images/resource/news1-1.jpg" alt="Image" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li className="categories"><Link href="/news-details">Relax Zone</Link></li>
                                    <li className="date">May 15, 2025</li>
                                </ul>
                                <h4 className="title"><Link href="/news-details">Advantages of Offering Online Registration at Your Hotel</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="news-block-four col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="/news-details">
                                        <img src="images/resource/news1-2.jpg" alt="Image" />
                                        <img src="images/resource/news1-2.jpg" alt="Image" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li className="categories"><Link href="/news-details">Royal suite</Link></li>
                                    <li className="date">Jan 28, 2025</li>
                                </ul>
                                <h4 className="title"><Link href="/news-details">Our Health Club is Now Available for Your Fitness Needs</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="news-block-four col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="/news-details">
                                        <img src="images/resource/news1-3.jpg" alt="Image" />
                                        <img src="images/resource/news1-3.jpg" alt="Image" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li className="categories"><Link href="/news-details">Apartments</Link></li>
                                    <li className="date">Oct 20, 2025</li>
                                </ul>
                                <h4 className="title"><Link href="/news-details">Restoring the Lighting Design in the Hotel</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default News
