'use client';

import React from 'react';
import Link from 'next/link';
import { FadeInLeft } from '@/lib/animations';


export default function PricingInner() {
  return (
    <>

    <section className="pricing-section-four">
      <div className="auto-container">
        <div className="row">
          <div className="pricing-block-four col-md-6 col-lg-4">
            <div className="inner-box">
              <div className="content-column">
                <FadeInLeft delay={0} className="inner-column">
                  <span className="pricing-title">Single Room</span>
                  <h6 className="pricing-amount"><sup>$</sup>29 <span>Per Room</span></h6>
                  <ul className="list-style-two">
                    <li><i className="icon fa fa-circle-check" />Pick & Drop Service</li>
                    <li><i className="icon fa fa-circle-check" />Swimming Pool</li>
                    <li><i className="icon fa fa-circle-check" />City Tour Guide</li>
                    <li><i className="icon fa fa-circle-check" />Fibre Internet</li>
                    <li><i className="icon fa fa-circle-check" />Book Flights Online</li>
                    <li><i className="icon fa fa-circle-check" />Book Hotel Rooms</li>
                  </ul>
                  <Link href="/page-pricing" className="book-now btn-style-four">Book Now</Link>
                </FadeInLeft>
              </div>
            </div>
          </div>
          <div className="pricing-block-four col-md-6 col-lg-4">
            <div className="inner-box">
              <div className="content-column">
                <FadeInLeft delay={0.2} className="inner-column">
                  <span className="pricing-title">Double Room</span>
                  <h6 className="pricing-amount"><sup>$</sup>40 <span>Per Room</span></h6>
                  <ul className="list-style-two">
                    <li><i className="icon fa fa-circle-check" />Pick & Drop Service</li>
                    <li><i className="icon fa fa-circle-check" />Swimming Pool</li>
                    <li><i className="icon fa fa-circle-check" />City Tour Guide</li>
                    <li><i className="icon fa fa-circle-check" />Fibre Internet</li>
                    <li><i className="icon fa fa-circle-check" />Book Flights Online</li>
                    <li><i className="icon fa fa-circle-check" />Book Hotel Rooms</li>
                  </ul>
                  <Link href="/page-pricing" className="book-now btn-style-four">Book Now</Link>
                </FadeInLeft>
              </div>
            </div>
          </div>
          <div className="pricing-block-four col-md-6 col-lg-4">
            <div className="inner-box">
              <div className="content-column">
                <FadeInLeft delay={0.4} className="inner-column">
                  <span className="pricing-title">Family Room</span>
                  <h6 className="pricing-amount"><sup>$</sup>99 <span>Per Room</span></h6>
                  <ul className="list-style-two">
                    <li><i className="icon fa fa-circle-check" />Pick & Drop Service</li>
                    <li><i className="icon fa fa-circle-check" />Swimming Pool</li>
                    <li><i className="icon fa fa-circle-check" />City Tour Guide</li>
                    <li><i className="icon fa fa-circle-check" />Fibre Internet</li>
                    <li><i className="icon fa fa-circle-check" />Book Flights Online</li>
                    <li><i className="icon fa fa-circle-check" />Book Hotel Rooms</li>
                  </ul>
                  <Link href="/page-pricing" className="book-now btn-style-four">Book Now</Link>
                </FadeInLeft>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
