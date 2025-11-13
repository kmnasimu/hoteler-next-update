"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper options
const swiperOptions = {
  modules: [Autoplay],
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true,
};

const slides = [
  {
    id: 1,
    img: 'images/banner/banner1-3.png',
    alt: 'Luxury hotel banner',
    subtitle: 'unique place and luxury hotel',
    title: 'Discover Your Home <br />Away from Home',
    link: '/page-about',
  },
  {
    id: 2,
    img: 'images/banner/banner1-3.png',
    alt: 'Luxury hotel banner',
    subtitle: 'unique place and luxury hotel',
    title: 'Discover Your Home <br />Away from Home',
    link: '/page-about',
  },
  {
    id: 3,
    img: 'images/banner/banner1-3.png',
    alt: 'Luxury hotel banner',
    subtitle: 'unique place and luxury hotel',
    title: 'Discover Your Home <br />Away from Home',
    link: '/page-about',
  },
];

function Banner() {
  return (
    <section id='home' className="banner-section">
      <Swiper {...swiperOptions} className="banner-slider banner-slider-home1">
        {slides.map((slide) => (
          <SwiperSlide className="banner-slide-v2" key={slide.id}>
            <div className="outer-box">
              <figure className="image wow fadeInUp tm-gsap-img-parallax overflow-hidden">
                <img src={slide.img} alt={slide.alt} />
              </figure>
              <div className="content-box">
                <span
                  className="sub-title"
                  data-animation-in="fadeInUp"
                  data-delay-in="0.1"
                >
                  {slide.subtitle}
                </span>
                <h1
                  data-animation-in="fadeInUp"
                  data-delay-in="0.3"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <Link href={slide.link} className="btn"
                    data-animation-in="fadeInUp"
                    data-delay-in="0.5">
                    rooms & suites
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Banner;
