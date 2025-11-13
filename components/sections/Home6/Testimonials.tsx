"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,  
};

function Testimonials() {
  return (
    <section className="testimonial-section-four">
      <div className="auto-container">
        <div className="row justify-content-end">
          <div className="col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title">Our Customer Feedback</span>
              <h2>What Client's Say?</h2>
            </div>
          </div>
        </div>

        <Slider {...settings} className="testimonial-carousel-two slick-gap-30">
          {/* Testimonial 1 */}
          <div className="testimonial-block-four">
            <div className="inner-box">
              <div className="content-box">
                <span className="icon fa fa-quote-right"></span>
                <div className="text">
                  Lorem ipsum dolor amet consectetur adipiscing accumsan pellentesque litora vitae parturient malesuada himenaeos tempor.
                </div>
              </div>
              <div className="info-box">
                <figure className="thumb">
                  <img src="/images/resource/testi2-thumb1.png" alt="Jenny Wilson" />
                </figure>
                <div>
                  <h6 className="name">Jenny Wilson</h6>
                  <span className="designation">Business Owner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-block-four">
            <div className="inner-box">
              <div className="content-box">
                <span className="icon fa fa-quote-right"></span>
                <div className="text">
                  Lorem ipsum dolor amet consectetur adipiscing accumsan pellentesque litora vitae parturient malesuada himenaeos tempor.
                </div>
              </div>
              <div className="info-box">
                <figure className="thumb">
                  <img src="/images/resource/testi2-thumb2.png" alt="Ralph Edwards" />
                </figure>
                <div>
                  <h6 className="name">Ralph Edwards</h6>
                  <span className="designation">Nursing Assistant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-block-four">
            <div className="inner-box">
              <div className="content-box">
                <span className="icon fa fa-quote-right"></span>
                <div className="text">
                  Lorem ipsum dolor amet consectetur adipiscing accumsan pellentesque litora vitae parturient malesuada himenaeos tempor.
                </div>
              </div>
              <div className="info-box">
                <figure className="thumb">
                  <img src="/images/resource/testi2-thumb1.png" alt="Ralph Edwards" />
                </figure>
                <div>
                  <h6 className="name">Ralph Edwards</h6>
                  <span className="designation">Nursing Assistant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="testimonial-block-four">
            <div className="inner-box">
              <div className="content-box">
                <span className="icon fa fa-quote-right"></span>
                <div className="text">
                  Lorem ipsum dolor amet consectetur adipiscing accumsan pellentesque litora vitae parturient malesuada himenaeos tempor.
                </div>
              </div>
              <div className="info-box">
                <figure className="thumb">
                  <img src="/images/resource/testi2-thumb2.png" alt="Ralph Edwards" />
                </figure>
                <div>
                  <h6 className="name">Ralph Edwards</h6>
                  <span className="designation">Nursing Assistant</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="image-box d-none d-lg-block">
        <figure className="image wow tm-gsap-img-parallax overflow-hidden">
          <img src="/images/resource/testimonials-side-bg.jpg" alt="Testimonials Side Background" />
        </figure>
      </div>
    </section>
  );
}

export default Testimonials;
