'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeInUp } from '@/lib/animations';

const services = [
  {
    id: 1,
    image: '/images/resource/service1-1.jpg',
    title: 'Family Discount',
    link: '/room-details',
  },
  {
    id: 2,
    image: '/images/resource/service1-2.jpg',
    title: 'Couples offer',
    link: '/room-details',
  },
  {
    id: 3,
    image: '/images/resource/service1-3.jpg',
    title: 'Buy One Get One Free',
    link: '/room-details',
  },
];

export default function Services() {
  return (
    <section id="services" className="service-section-three">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">What we offer</span>
          <h2>Get Our Special Offer.</h2>
        </div>
        <div className="outer-box">
          <div className="row">
            {services.map((service, index) => (
              <FadeInUp
                key={service.id}
                delay={index * 0.2}
                className="service-block-three col-lg-4 col-md-6"
              >
                <div className="inner-box">
                  <figure className="image">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                    />
                  </figure>
                  <div className="content-box">
                    <h6 className="title">
                      <Link href={service.link}>{service.title}</Link>
                    </h6>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


