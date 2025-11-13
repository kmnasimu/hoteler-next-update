'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    text: 'Staying at Hoteler was an unforgettable experience. The staff went above and beyond to ensure our comfort and satisfaction. The room was immaculate, with breath-taking views',
    name: 'Jenny Wilson',
    designation: 'Business Owner',
    thumb: '/images/resource/testi2-thumb1.png',
  },
  {
    id: 2,
    text: 'Staying at Hoteler was an unforgettable experience. The staff went above and beyond to ensure our comfort and satisfaction. The room was immaculate, with breath-taking views',
    name: 'Marvin McKinney',
    designation: 'President of Sales',
    thumb: '/images/resource/testi2-thumb2.png',
  },
  {
    id: 3,
    text: 'Staying at Hoteler was an unforgettable experience. The staff went above and beyond to ensure our comfort and satisfaction. The room was immaculate, with breath-taking views',
    name: 'Jenny Wilson',
    designation: 'Business Owner',
    thumb: '/images/resource/testi2-thumb3.png',
  },
];

export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const swiperOptions = {
    modules: [Autoplay, Navigation, Thumbs],
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: true,
    thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined,
  };

  return (
    <section className="testimonial-section-two pt-0">
      <div className="anim-icons">
        <Image
          className="image-1"
          src="/images/icons/shape-5.png"
          alt=""
          width={200}
          height={200}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="testimonials overflow-hidden col-lg-12">
            <div className="swiper-container testimonial-slider-content">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                {testimonials.map((testimonial) => (
                  <SwiperSlide
                    key={testimonial.id}
                    className="testimonial-block-two swiper-slide"
                  >
                    <div className="inner-box">
                      <div className="quote-icon">
                        <Image
                          className="icon-img"
                          src="/images/icons/testi-shape1.png"
                          alt=""
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="text">{testimonial.text}</div>
                      <div className="info-box">
                        <h5 className="name">{testimonial.name}</h5>
                        <span className="designation">{testimonial.designation}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="swiper-container testimonial-thumbs mx-auto">
              <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={3}
                spaceBetween={0}
                watchSlidesProgress={true}
                className="swiper-wrapper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="swiper-slide">
                    <Image
                      src={testimonial.thumb}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

