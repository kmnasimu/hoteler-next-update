'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="main-footer footer-style-one">
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            <div className="footer-column col-lg-4 col-sm-6">
              <div className="footer-widget about-widget">
                <div className="widget-content">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        src="/images/logo-2.png"
                        alt="Logo"
                        width={150}
                        height={50}
                      />
                    </Link>
                  </div>
                  <div className="text mb-0">
                    Feel free to reach out if you want collaborate with us, or
                    simply chat.
                  </div>
                </div>
              </div>
              <div className="footer-widget news-widget">
                <div className="subscribe-form-three">
                  <form method="post" action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="email"
                        placeholder="Email Address"
                        required
                      />
                      <button type="button" className="theme-btn btn-style-one">
                        <span className="btn-title">
                          <i className="fa fa-paper-plane" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-widget widget-social">
                <h4 className="widget-title">Follow Us</h4>
                <div className="widget-content">
                  <ul className="social-icon">
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-whatsapp" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column col-lg-3 col-sm-6 mb-0 ps-xl-5">
              <div className="footer-widget links-widget ps-xl-5">
                <h4 className="widget-title">Services</h4>
                <div className="widget-content">
                  <ul className="user-links">
                    <li>
                      <Link href="/">Store Directory</Link>
                    </li>
                    <li>
                      <Link href="/">Top Hotels</Link>
                    </li>
                    <li>
                      <Link href="/">Quick Links</Link>
                    </li>
                    <li>
                      <Link href="/">Important Links</Link>
                    </li>
                    <li>
                      <Link href="/">Insights</Link>
                    </li>
                    <li>
                      <Link href="/">Knowledge Center</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column col-lg-2 col-sm-6 mb-0 ps-xl-4">
              <div className="footer-widget links-widget ps-xl-4">
                <h4 className="widget-title">Company</h4>
                <div className="widget-content">
                  <ul className="user-links">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/">About Us</Link>
                    </li>
                    <li>
                      <Link href="/">Services</Link>
                    </li>
                    <li>
                      <Link href="/">Career</Link>
                    </li>
                    <li>
                      <Link href="/">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column col-lg-3 col-sm-6">
              <div className="footer-widget info-widget ps-xl-5 ms-xl-5 mb-30">
                <h4 className="widget-title">New York</h4>
                <div className="widget-content">
                  <div className="contact-list">
                    <div className="inner">
                      <div className="list-info">
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </div>
                      <div className="list-info">(000) 222-0000</div>
                      <div className="list-info">info@yourwebsite.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-widget info-widget ps-xl-5 ms-xl-5">
                <h4 className="widget-title">London</h4>
                <div className="widget-content">
                  <div className="contact-list">
                    <div className="inner">
                      <div className="list-info">
                        1901 Thorn ridge Cir. Shiloh, Hawaii 81063
                      </div>
                      <div className="list-info">(000) 000-0000</div>
                      <div className="list-info">info@yourwebsite.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">
              © 2025 <span>ThemeMascot</span> Agency
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


