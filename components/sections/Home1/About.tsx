'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeInUp, FadeInRight, FadeInLeft } from '@/lib/animations';

export default function About() {
  return (
    <section id="about" className="about-section-two pt-0">
      <div className="anim-icons">
        <Image
          className="image-1"
          src="/images/icons/icon-home1.png"
          alt=""
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="auto-container">
        <div className="row">
          <FadeInRight delay={0.6} className="content-column col-lg-7">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title style-three">LUXURY HOTELer</span>
                <h2>
                  We Provide Outdoor <br />
                  Activities To All Visitors
                </h2>
                <div className="text">
                  San Francisco has hills with views, the coast, excellent food
                  & has been voted the happiest, healthiest and fittest city in
                  the States many times.
                </div>
              </div>
              <div className="outer-box">
                <div className="info-block">
                  <div className="inner">
                    <div className="icon-box">
                      <i className="flaticon-light" />
                    </div>
                    <h4 className="title">
                      The Best <br />
                      Lighting
                    </h4>
                  </div>
                </div>
                <div className="info-block">
                  <div className="inner">
                    <div className="icon-box">
                      <i className="flaticon-pool" />
                    </div>
                    <h4 className="title">
                      The Best <br />
                      Swiming
                    </h4>
                  </div>
                </div>
              </div>
              <ul className="list-style-two">
                <li>
                  <i className="icon fa fa-circle-check" />
                  It is a long fact that a reader will be distracted by the
                  readable
                </li>
                <li>
                  <i className="icon fa fa-circle-check" />
                  Lorem Ipsum is simply dummy of the printing and industry
                </li>
                <li>
                  <i className="icon fa fa-circle-check" />
                  There are many variations of Lorem Ipsum majority
                </li>
              </ul>
              <div className="btn-box">
                <Link
                  href="/page-about"
                  className="theme-btn btn-style-one"
                >
                  <span className="btn-title">Discover More</span>
                </Link>
              </div>
            </div>
          </FadeInRight>
          <div className="image-column col-md-7 col-lg-5">
            <FadeInLeft className="inner-column">
              <figure className="image-1 overlay-anim">
                <Image
                  src="/images/resource/about2-1.jpg"
                  alt=""
                  width={500}
                  height={600}
                />
              </figure>
              <figure className="image-2 overlay-anim">
                <Image
                  src="/images/resource/about2-2.jpg"
                  alt=""
                  width={500}
                  height={600}
                />
              </figure>
            </FadeInLeft>
          </div>
        </div>
      </div>
    </section>
  );
}

