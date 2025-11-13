'use client';

"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        image: '/images/resource/project-1.jpg',
        title: 'Hotel Booking System',
        link: '/page-project-details',
    },
    {
        id: 2,
        image: '/images/resource/project-2.jpg',
        title: 'Hotel Management',
        link: '/page-project-details',
    },
    {
        id: 3,
        image: '/images/resource/project-3.jpg',
        title: 'Room Reservation',
        link: '/page-project-details',
    },
    {
        id: 4,
        image: '/images/resource/project-4.jpg',
        title: 'Booking Platform',
        link: '/page-project-details',
    },
];

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
};

export default function ProjectsSliderOne() {
    return (
        <div className="projects-slider">
            <Swiper {...swiperOptions} className="projects-slider-wrapper">
                {projects.map((project) => (
                    <SwiperSlide key={project.id} className="project-slide">
                        <div className="project-block">
                            <div className="inner-box">
                                <figure className="image">
                                    <Link href={project.link}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={400}
                                            height={300}
                                        />
                                    </Link>
                                </figure>
                                <div className="content-box">
                                    <h4 className="title">
                                        <Link href={project.link}>{project.title}</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

