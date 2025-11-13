import React from 'react';
import Link from 'next/link';


function Banner() {
    return (
        <>

        <section id='home' className="banner-section-five">
            <div className="bg bg-image overflow-hidden" style={{backgroundImage: 'url(images/banner/banner2-1.jpg)'}}></div>
            <div className="auto-container">
                <div className="content-column">
                    <div className="inner-column">
                        <div className="star-rating wow fadeInUp" data-wow-delay="300ms">
                            <i className="fa-sharp fa-solid fa-star-sharp" />
                            <i className="fa-sharp fa-solid fa-star-sharp" />
                            <i className="fa-sharp fa-solid fa-star-sharp" />
                            <i className="fa-sharp fa-solid fa-star-sharp" />
                            <i className="fa-sharp fa-solid fa-star-sharp" />
                        </div>
                        <h1 className="title wow fadeInUp" data-wow-delay="600ms">Book Your Dream Hotel with Hoteler</h1>
                        <div className="text wow fadeInUp" data-wow-delay="800ms">Hoteler is the ultimate destination to rejuvenate your spirit. Featuring recently <br />renovated rooms & an enhanced emphasis on culinary excellence</div>
                        <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                            <Link href="/contact" className="theme-btn btn-style-three"><span className="btn-title">BOOK NOW</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Banner