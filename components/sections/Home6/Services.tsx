'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 600, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
};

const slides = [
    { category: "Bedroom", title: "The Fox House", bg: "images/background/bg1.jpg" },
    { category: "Furniture", title: "Minimalism", bg: "images/background/bg2.jpg" },
    { category: "Interior", title: "House Lighting", bg: "images/background/bg1.jpg" },
    { category: "Bedroom", title: "The Fox House", bg: "images/background/bg2.jpg" },
    { category: "Furniture", title: "Minimalism", bg: "images/background/bg1.jpg" },
    { category: "Bedroom", title: "The Fox House", bg: "images/background/bg2.jpg" },
];

function Services() {
    const [backgroundImage, setBackgroundImage] = useState('images/background/bg1.jpg'); // default background

    const handleMouseEnter = (bgImage: string) => {
        setBackgroundImage(bgImage);
    };

    const handleMouseLeave = () => {
        setBackgroundImage('images/background/bg1.jpg'); // reset to default when not hovering
    };

    return (
        <section className="service-section-two pt-80 pb-0">
            <div className="auto-container">
                <div className="sec-title wow fadeInUp">
                    <div className="row">
                        <div className="col-lg-5">
                            <span className="sub-title style-three">HOW IT WORKS</span>
                            <h2>Stay Better, Travel Happier with Us</h2>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Outer box with dynamic background */}
            <div className="outer-box" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <Slider {...settings} className="service-two-slider">
                    {slides.map((slide, index) => (
                        <div 
                            key={index} 
                            className="service-block-two" 
                            style={{ backgroundImage: `url(${slide.bg})` }}
                            onMouseEnter={() => handleMouseEnter(slide.bg)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="inner-box">
                                <div className="content">
                                    <div className="category">{slide.category}</div>
                                    <h3 className="title">{slide.title}</h3>
                                </div>
                                <div className="overlay-content">
                                    <div className="category">{slide.category}</div>
                                    <h3 className="title">
                                        <Link href="/room-details">{slide.title}</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Services;
