'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeInUp, ScaleIn } from '@/lib/animations';

const pricingItems = [
  {
    id: 1,
    image: '/images/resource/pricing2-1.png',
    title: 'Pasta With Fish',
    price: '$39',
    description: 'Lorem Ipsum is that it smt',
    tag: 'starter',
  },
  {
    id: 2,
    image: '/images/resource/pricing2-2.png',
    title: 'Noodles',
    price: '$16',
    description: 'Lorem Ipsum is that it smt',
    tag: 'new',
  },
  {
    id: 3,
    image: '/images/resource/pricing2-3.png',
    title: 'Fresh Meat',
    price: '$26',
    description: 'Lorem Ipsum is that it smt',
    tag: 'new',
  },
  {
    id: 4,
    image: '/images/resource/pricing2-4.png',
    title: 'Chicken',
    price: '$19',
    description: 'Lorem Ipsum is that it smt',
    tag: 'vegan',
  },
  {
    id: 5,
    image: '/images/resource/pricing2-5.png',
    title: 'Spaghetti',
    price: '$37',
    description: 'Lorem Ipsum is that it smt',
    tag: 'new',
  },
  {
    id: 6,
    image: '/images/resource/pricing2-6.png',
    title: 'Vegetarian Fried',
    price: '$34',
    description: 'Lorem Ipsum is that it smt',
    tag: 'new',
  },
  {
    id: 7,
    image: '/images/resource/pricing2-7.png',
    title: 'Vegetarian Soup',
    price: '$42',
    description: 'Lorem Ipsum is that it smt',
    tag: 'glutan free',
  },
  {
    id: 8,
    image: '/images/resource/pricing2-8.png',
    title: 'Salmon Pasta',
    price: '$71',
    description: 'Lorem Ipsum is that it smt',
    tag: 'fish',
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="auto-container">
        <FadeInUp className="sec-title text-center">
          <span className="sub-title">Hoteler best menus</span>
          <h2>Unique Specialty Foods</h2>
        </FadeInUp>
        <ScaleIn className="row gx-xl-5">
          {pricingItems.map((item) => (
            <div
              key={item.id}
              className="pricing-block-two col-lg-6 col-md-6 col-sm-12"
            >
              <div className="inner-box">
                <figure className="thumb overlay-anim">
                  <Link href="/page-pricing">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                    />
                  </Link>
                </figure>
                <div className="content-box">
                  <h6 className="title">
                    {item.title}
                    <span>{item.price}</span>
                  </h6>
                  <span className="designation">{item.description}</span>
                </div>
                <span className="food-pack">{item.tag}</span>
              </div>
            </div>
          ))}
        </ScaleIn>
      </div>
    </section>
  );
}

