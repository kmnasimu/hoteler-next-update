'use client';

import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'


function Banner() {
    const [isOpen, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    return (
        <>

        <section id='home' className="banner-section-two">
            <div className="bg bg-image tm-gsap-img-parallax overflow-hidden">
                <img className="img-fit-cover" src="images/banner/banner-2.jpg" alt="" />
            </div>
            <div className="anim-icons">
                <img className="image-1" src="images/icons/map-shape1.png" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="content-column col-lg-7 col-md-6">
                        <div className="inner-column">
                            <div className="offer-text mb-0 wow fadeInUp" data-wow-delay="300ms">
                                <div className="star-rating">
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                    <i className="fa-sharp fa-solid fa-star-sharp" />
                                </div>
                            </div>
                            <h1 className="title wow fadeInUp" data-wow-delay="600ms">Your perfect getaway Awaits, book today</h1>
                            <div className="text wow fadeInUp" data-wow-delay="800ms">Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt ter jrthendrerit cursus integer ridiculus eros bibendum dictum</div>
                        </div>
                        <div className="btn-box wow fadeInUp" data-wow-delay="900ms">
                            <Link href="/services" className="theme-btn btn-style-two"><span className="btn-title">ROOM & SUITES</span></Link>                            
                            <div className="video-box">
                                <a onClick={() => setOpen(true)} className="play-now" data-fancybox="gallery" data-caption="">
                                    <i className="icon fa fa-play" />                                    
                                </a>
                                <div className="video-text">HOW IT WORK</div>
                            </div>
                        </div>
                    </div>
                    <div className="booking-form-column bg-light-style col-lg-5 col-md-6">
                        <div className="inner-column wow fadeInRight" data-wow-delay="200ms">
                            <div className="sec-title">
                                <h3>Hotel Booking</h3>
                            </div>
                            <form className="bk-form">
                                <div className="frm-field">
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        dateFormat="yyyy/MM/dd"
                                        className="py-2"
                                        placeholderText="20 June, 2025"
                                    />
                                    <img src="images/icons/mail.png" alt="" />
                                </div>
                                <div className="frm-field">
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        dateFormat="yyyy/MM/dd"
                                        className="py-2"
                                        placeholderText="20 June, 2025"
                                    />
                                    <img src="images/icons/mail.png" alt="" />
                                </div>
                                <div className="frm-field">
                                    <select>
                                    <option>Adult</option>
                                    <option>Adult</option>
                                    <option>Adult</option>
                                    <option>Adult</option>
                                    </select>
                                    <i className="fa fa-angle-down" />
                                </div>
                                <div className="frm-field">
                                    <select>
                                    <option>Children</option>
                                    <option>Children</option>
                                    <option>Children</option>
                                    <option>Children</option>
                                    </select>
                                    <i className="fa fa-angle-down" />
                                </div>
                                <div className="form-submit">
                                    <button type="submit">Check Availability</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />

        </>
    )
}
export default Banner
