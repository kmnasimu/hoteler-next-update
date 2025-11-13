"use client";

import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings: any = {
  infinite: true,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: false,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,  
};

function Clients() {
    return (
        <>
        <section className="client-section-two pt-120">
            <div className="auto-container">
                <Slider {...settings} className="client-slider">
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><Link href="/"><img src="images/resource/client1-1.png" alt="" /></Link></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><Link href="/"><img src="images/resource/client1-2.png" alt="" /></Link></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><Link href="/"><img src="images/resource/client1-3.png" alt="" /></Link></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><Link href="/"><img src="images/resource/client1-4.png" alt="" /></Link></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><Link href="/"><img src="images/resource/client1-5.png" alt="" /></Link></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><Link href="/"><img src="images/resource/client1-1.png" alt="" /></Link></figure>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
        </>
    );
}

export default Clients;
