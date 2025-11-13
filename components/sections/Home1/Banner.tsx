'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FadeInUp } from '@/lib/animations';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true,
};

export default function Banner() {
  const slides = [
    {
      id: 1,
      image: '/images/banner/banner1-1.jpg',
      title: 'Book Your Dream Hotel',
      subtitle: 'With Hoteler',
    },
    {
      id: 2,
      image: '/images/banner/banner1-1.jpg',
      title: 'Book Your Dream Hotel',
      subtitle: 'With Hoteler',
    },
    {
      id: 3,
      image: '/images/banner/banner1-1.jpg',
      title: 'Book Your Dream Hotel',
      subtitle: 'With Hoteler',
    },
  ];

  return (
    <section id="home" className="banner-section-seven">
      <Swiper {...swiperOptions} className="banner-slider banner-slider-home1">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="banner-slide">
            <div className="outer-box">
              <FadeInUp className="image-1 tm-gsap-img-parallax overflow-hidden">
                <figure>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1920}
                    height={1080}
                    className="img-fluid"
                  />
                </figure>
              </FadeInUp>
              <div className="content-box">
                <FadeInUp delay={0.3} className="star-rating">
                  <i className="fa-sharp fa-solid fa-star-sharp" />
                  <i className="fa-sharp fa-solid fa-star-sharp" />
                  <i className="fa-sharp fa-solid fa-star-sharp" />
                  <i className="fa-sharp fa-solid fa-star-sharp" />
                  <i className="fa-sharp fa-solid fa-star-sharp" />
                </FadeInUp>
                <FadeInUp delay={0.3}>
                  <h1>
                    {slide.title} <br />
                    {slide.subtitle}
                  </h1>
                </FadeInUp>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


