'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FadeInRight, FadeInLeft } from '@/lib/animations';

export default function About() {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate Progress Bars when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLDivElement;
            const percent = element.getAttribute('data-percent');
            if (percent) {
              element.style.width = percent;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section id="about" className="about-section-six">
      <div className="auto-container">
        <div className="row">
          <FadeInRight delay={0.6} className="content-column col-xl-6 col-lg-6">
            <div className="inner-column">
              <div className="sec-title">
                <span className="sub-title">Hoteler Luxury Hotel</span>
                <h2>Our Goal is to Ensure Hotel Booking Accessibility.</h2>
                <div className="text">
                  Hoteler is more than just a profession—it&apos;s a passion. We
                  believe in the idea that a well-designed website speaks volumes
                  about your business.
                </div>
              </div>
              <div className="progress-info">
                <div className="progress">
                  <div className="progress-single">
                    <h5 className="progress-title">Project Done</h5>
                    <div className="bar">
                      <div
                        ref={(el) => {
                          progressRefs.current[0] = el;
                        }}
                        className="bar-inner count-bar"
                        data-percent="90%"
                      >
                        <div className="count-text">90%</div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-single">
                    <h5 className="progress-title">Happy Clients</h5>
                    <div className="bar">
                      <div
                        ref={(el) => {
                          progressRefs.current[1] = el;
                        }}
                        className="bar-inner count-bar"
                        data-percent="50%"
                      >
                        <div className="count-text">50%</div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-single">
                    <h5 className="progress-title">Project Done</h5>
                    <div className="bar">
                      <div
                        ref={(el) => {
                          progressRefs.current[2] = el;
                        }}
                        className="bar-inner count-bar"
                        data-percent="80%"
                      >
                        <div className="count-text">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInRight>
          <div className="image-column col-xl-6 col-lg-6">
            <FadeInLeft className="inner-column">
              <figure className="image-1 overlay-anim">
                <Image
                  src="/images/resource/about6-1.jpg"
                  alt="Hotel Experience"
                  width={600}
                  height={500}
                />
              </figure>
              <div className="exp-info-text">Find Your Perfect Stay, Every Time.</div>
            </FadeInLeft>
          </div>
        </div>
      </div>
    </section>
  );
}

