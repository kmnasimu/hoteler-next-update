"use client";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings: any = {
    autoplay: true,
    speed: 800,
    lazyLoad: 'progressive',
    slidesToShow: 5,
    slidesToScroll: 1,
    dots:false,
    arrows:false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
};

function Clients() {
    return (
        <>

        <section className="client-section-two pt-120">
            <div className="auto-container">
                <Slider {...settings} className="client-slider wow fadeInUp"> 
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><img src="images/resource/client1-1.png" alt="" /></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><img src="images/resource/client1-2.png" alt="" /></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><img src="images/resource/client1-3.png" alt="" /></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><img src="images/resource/client1-4.png" alt="" /></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><img src="images/resource/client1-5.png" alt="" /></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><img src="images/resource/client1-1.png" alt="" /></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><img src="images/resource/client1-2.png" alt="" /></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><img src="images/resource/client1-3.png" alt="" /></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><img src="images/resource/client1-4.png" alt="" /></figure>
                        </div>
                    </div>
                    <div className="client-block-two">
                        <div className="inner-box">
                            <figure className="image"><img src="images/resource/client1-5.png" alt="" /></figure>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>

        </>
    )
}
export default Clients