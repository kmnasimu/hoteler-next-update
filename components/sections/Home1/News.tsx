'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeInUp } from '@/lib/animations';

const newsItems = [
  {
    id: 1,
    image: '/images/resource/news1-1.jpg',
    category: 'Relax Zone',
    date: 'May 15, 2025',
    title: 'Advantages of Offering Online Registration at Your Hotel',
    link: '/news-details',
  },
  {
    id: 2,
    image: '/images/resource/news1-2.jpg',
    category: 'Royal suite',
    date: 'Jan 28, 2025',
    title: 'Our Health Club is Now Available for Your Fitness Needs',
    link: '/news-details',
  },
  {
    id: 3,
    image: '/images/resource/news1-3.jpg',
    category: 'Apartments',
    date: 'Oct 20, 2025',
    title: 'Restoring the Lighting Design in the Hotel',
    link: '/news-details',
  },
];

export default function News() {
  return (
    <section id="news" className="news-section">
      <div className="auto-container">
        <FadeInUp className="sec-title text-center">
          <span className="sub-title">NEWS & BLOG</span>
          <h2>
            Check Latest Blog Post <br />
            from Blog List
          </h2>
        </FadeInUp>
        <div className="row">
          {newsItems.map((item, index) => (
            <FadeInUp
              key={item.id}
              delay={index * 0.3}
              className="news-block-four col-lg-4 col-md-6"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href={item.link}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                      />
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                      />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <ul className="post-meta">
                    <li className="categories">
                      <Link href={item.link}>{item.category}</Link>
                    </li>
                    <li className="date">{item.date}</li>
                  </ul>
                  <h4 className="title">
                    <Link href={item.link}>{item.title}</Link>
                  </h4>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

