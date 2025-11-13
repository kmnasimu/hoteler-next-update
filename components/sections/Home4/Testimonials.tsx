"use client";
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick").then((mod) => mod.default), {
    ssr: false,
    loading: () => <div>Loading...</div>
});

const settings = {
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    fadeSpeed: 1000
};

function Testimonial() {
    return (
        <>

        <section className="testimonial-section">
            <div className="testimonial-pattrn1-1 bounce-y" />
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Testimonial</span>
                    <h2>What they say?</h2>
                </div>
                <div className="carousel-outer col-lg-10 offset-lg-1">
                    <Slider {...settings} className="testimonial-single-slider slick-dotted">
                        <div className="testimonial-block">
                            <div className="inner-box text-center">
                                <div className="rating">
                                    <i className="icon fa fa-star" />
                                    <i className="icon fa fa-star" />
                                    <i className="icon fa fa-star" />
                                    <i className="icon fa fa-star" />
                                    <i className="icon fa fa-star" />
                                </div>
                                <div className="text">Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus</div>
                                <div className="info-box">
                                    <h4 className="name">Robert Fox -</h4>
                                    <span className="designation">Co Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block">
                            <div className="inner-box text-center">
                                <div className="rating">
                                    <i className="icon fa fa-star" />
                                    <i className="icon fa fa-star" />
                                    <i className="icon fa fa-star" />
                                    <i className="icon fa fa-star" />
                                    <i className="icon fa fa-star" />
                                </div>
                                <div className="text">Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus</div>
                                <div className="info-box">
                                    <h4 className="name">Robert Fox -</h4>
                                    <span className="designation">Co Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-block">
                            <div className="inner-box text-center">
                                <div className="rating">
                                    <i className="icon fa fa-star" />
                                    <i className="icon fa fa-star" />
                                    <i className="icon fa fa-star" />
                                    <i className="icon fa fa-star" />
                                    <i className="icon fa fa-star" />
                                </div>
                                <div className="text">“  Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue nunc venenatis id. Pellentesque habitant morbi tristique senectus ”</div>
                                <div className="info-box">
                                    <h4 className="name">Robert Fox -</h4>
                                    <span className="designation">Co Founder</span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className="image-box">
                        <figure className="image client1 bounce-x overlay-anim">
                            <Link href="/"><img src="images/resource/client1.png" alt="Image" /></Link>
                        </figure>
                        <figure className="image client2 bounce-y overlay-anim">
                            <Link href="/"><img src="images/resource/client2.png" alt="Image" /></Link>
                        </figure>
                        <figure className="image client3 bounce-x overlay-anim">
                            <Link href="/"><img src="images/resource/client3.png" alt="Image" /></Link>
                        </figure>
                        <figure className="image client4 bounce-x overlay-anim">
                            <Link href="/"><img src="images/resource/client4.png" alt="Image" /></Link>
                        </figure>
                        <figure className="image client5 bounce-y overlay-anim">
                            <Link href="/"><img src="images/resource/client5.png" alt="Image" /></Link>
                        </figure>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Testimonial