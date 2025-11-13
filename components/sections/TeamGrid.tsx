'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeInUp, FadeInLeft } from '@/lib/animations';

const teamMembers = [
  {
    id: 1,
    image: '/images/resource/team-1.jpg',
    name: 'Michael Dean',
    designation: 'CEO & Founder',
  },
  {
    id: 2,
    image: '/images/resource/team-2.jpg',
    name: 'Frank Burton',
    designation: 'Kitchen Manager',
  },
  {
    id: 3,
    image: '/images/resource/team-3.jpg',
    name: 'Mya Mullins',
    designation: 'Hotel Manager',
  },
  {
    id: 4,
    image: '/images/resource/team-4.jpg',
    name: 'Ralph Nguyen',
    designation: 'Room Service',
  }  
];

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="anim-icons">
        <Image
          className="image-1"
          src="/images/icons/shape-15.png"
          style={{ width: "auto", height: "auto" }}
          alt=""
          width={200}
          height={200}
        />
      </div>
      <div className="auto-container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="team-block col-lg-3 col-sm-6">
              <FadeInLeft delay={index * 0.2} className="inner-box">
                <div className="image-box">
                  <div className="inner-box">
                    <figure className="image overlay-anim">
                      <Link href="/team-details">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={300}
                          height={400}
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className="info-box">
                    <h4 className="name">
                      <Link href="/team-details">{member.name}</Link>
                    </h4>
                    <span className="designation">{member.designation}</span>
                    <div className="social-links">
                      <Link href="/">
                        <i className="fab fa-facebook" />
                      </Link>
                      <Link href="/">
                        <i className="fab fa-x-twitter" />
                      </Link>
                      <Link href="/">
                        <i className="fab fa-linkedin" />
                      </Link>
                      <Link href="/">
                        <i className="fab fa-youtube" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeInLeft>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

