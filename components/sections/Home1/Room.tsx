'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeInUp } from '@/lib/animations';

const rooms = [
  {
    id: 1,
    image: '/images/resource/room-service1-1.jpg',
    title: 'Junior Suite',
    price: '$150/ Night',
    link: '/room-details',
    facilities: {
      persons: '1-2 Persons',
      bed: 'King Size Bed',
      bathtub: 'Bathtub',
      wifi: 'Free Wifi',
    },
  },
  {
    id: 2,
    image: '/images/resource/room-service1-2.jpg',
    title: 'Family Suite',
    price: '$250/ Night',
    link: '/room-details',
    facilities: {
      persons: '2-4 Persons',
      bed: 'King Size Bed',
      bathtub: 'Bathtub',
      wifi: 'Free Wifi',
    },
  },
  {
    id: 3,
    image: '/images/resource/room-service1-3.jpg',
    title: 'Deluxe Suite',
    price: '$350/ Night',
    link: '/room-details',
    facilities: {
      persons: '2-4 Persons',
      bed: 'King Size Bed',
      bathtub: 'Bathtub',
      wifi: 'Free Wifi',
    },
  },
];

export default function Room() {
  return (
    <section id="projects" className="room-service-section pt-120 pb-60">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">CUSTOMER SERVICES</span>
          <h2>
            Book your stay and <br />
            relax in luxury
          </h2>
        </div>
        <div className="row">
          {rooms.map((room, index) => (
            <FadeInUp
              key={room.id}
              delay={index * 0.3}
              className="room-service-block-one col-lg-4 col-sm-6"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image mb-0">
                    <Link href={room.link}>
                      <Image
                        src={room.image}
                        alt={room.title}
                        width={400}
                        height={300}
                      />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <div className="inner-box">
                    <h4 className="title">
                      <Link href={room.link}>{room.title}</Link>
                    </h4>
                    <div className="price">{room.price}</div>
                  </div>
                  <div className="facilities-box align-items-center d-flex justify-content-between">
                    <ul className="facilities-list">
                      <li>
                        <i className="fal fa-circle-user me-2" />
                        {room.facilities.persons}
                      </li>
                      <li>
                        <i className="fal fa-bed me-2" />
                        {room.facilities.bed}
                      </li>
                    </ul>
                    <ul className="facilities-list">
                      <li>
                        <i className="fal fa-bath me-2" />
                        {room.facilities.bathtub}
                      </li>
                      <li>
                        <i className="fal fa-wifi me-2" />
                        {room.facilities.wifi}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

