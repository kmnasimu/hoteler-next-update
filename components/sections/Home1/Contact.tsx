'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FadeInLeft } from '@/lib/animations';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="bg bg-image tm-gsap-img-parallax overflow-hidden">
        <Image
          src="/images/background/bg-contact5.jpg"
          alt="Contact Background"
          width={1920}
          height={1080}
          className="img-fluid"
        />
      </div>
      <div
        className="icon icon-contact-shape1"
        style={{ backgroundImage: 'url(/images/icons/shape-4.png)' }}
      ></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            <div className="form-column col-lg-8 offset-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <FadeInLeft className="contact-form">
                  <div className="icon-anchor-1 bounce-y"></div>
                  <div className="sec-title">
                    <span className="sub-title style-three">Contact Us</span>
                    <h2>Get in Touch</h2>
                  </div>
                  <form method="post" action="get" id="contact-form">
                    <div className="row">
                      <div className="form-group col-lg-6 col-md-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          autoComplete="name"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          autoComplete="email"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Check In"
                          autoComplete="tel"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Check Out"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <textarea
                          name="textarea"
                          placeholder="Write a Message"
                          autoComplete="off"
                          rows={2}
                        ></textarea>
                      </div>
                      <div className="form-group col-lg-12">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one bg-dark"
                          name="submit-form"
                        >
                          <span className="btn-title">Check Availability</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </FadeInLeft>
                <div className="contact-block">
                  <div className="inner-box">
                    <figure className="image icon-contact1">
                      <Image
                        src="/images/icons/icon-call-2.png"
                        alt="Call Icon"
                        width={50}
                        height={50}
                      />
                    </figure>
                    <div className="content-box">
                      <figure className="icon-img">
                        <Image
                          src="/images/icons/icon-call-1.png"
                          alt=""
                          width={30}
                          height={30}
                        />
                      </figure>
                      <span className="text">Call us for any inquiry</span>
                      <Link href="tel:+8801750050088" className="text-two">
                        (801) 500 50 088
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

