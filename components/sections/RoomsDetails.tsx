'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const roomImages = [
  '/images/resource/room-1.jpg',
  '/images/resource/room-2.jpg',
  '/images/resource/room-4.jpg',
  '/images/resource/room-2.jpg'
];

export default function RoomsDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

  return (
    <>

      <section className="blog-details pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7 product-details rd-page">
              <div className="room-details__left">
                <div className="room-heading">
                  <h3 className="title mb-4">Double Room</h3>
                  <div className="text">40-inch LED TV / Mini bar / Non-smoking / USB charging</div>
                  <ul className="kodelisting-room-basic-info g-3">
                    <li><i className="fa-classic fat fa-users" /> <span className="csrbi-text">2 Guests</span></li>
                    <li><i className="fa-classic fa-thin fa-bed-front fa-fw" /> <span className="csrbi-text">2 Bed</span></li>
                    <li><i className="fa-classic fa-thin fa-bath fa-fw" /> <span className="csrbi-text">2 Bathroom</span></li>
                  </ul>
                </div>
              </div>

              {/* BXSlider - Room Images Slider */}
              <div className="bxslider">
                <div className="slider-content">
                  <Swiper
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Autoplay, Thumbs]}
                    loop={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    className="slider-pager"
                  >
                    {roomImages.map((image, index) => (
                      <SwiperSlide key={index}>
                        <figure className="image-box">
                          <Link href={image} className="lightbox-image" data-fancybox="gallery">
                            <img src={image} alt={`Room image ${index + 1}`} />
                          </Link>
                        </figure>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Thumbnail Slider */}
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="slider-pager thumb-slider"
                  >
                    {roomImages.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="thumb-box">
                          <figure>
                            <img src={image} alt={`Room thumbnail ${index + 1}`} style={{ width: '100px', height: '100%', objectFit: 'cover' }}/>
                          </figure>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="room-details__left">
                <div className="wrapper">
                  <h3>Description of the Room</h3>
                  <p className="text">
                    Unwind in our spacious Hoteler King Room, thoughtfully designed for comfort and relaxation.
                    Featuring a plush king-sized bed, elegant décor, and modern amenities, this room offers the perfect
                    retreat after a day of travel or exploration.
                  </p>

                  {/* Room Details Box */}
                  <div className="row justify-content-center">
                    <div className="col-xl-12">
                      <div className="room-details__content-right mb-40 mt-20">
                        <div className="room-details__details-box">
                          <div className="row">
                            <div className="col-6 col-md-3">
                              <p className="text mb-0">Room Size</p>
                              <h6>600Sq</h6>
                            </div>
                            <div className="col-6 col-md-3">
                              <p className="text mb-0">Rooms Bed</p>
                              <h6>2 Single Bed</h6>
                            </div>
                            <div className="col-6 col-md-3">
                              <p className="text mb-0">Occupancy</p>
                              <h6>Three Persons</h6>
                            </div>
                            <div className="col-6 col-md-3">
                              <p className="text mb-0">View</p>
                              <h6>Sea View</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text">
                    Enjoy natural light streaming through large windows, a cozy seating area, and a work-friendly desk.
                    The private en-suite bathroom is equipped with a rain shower, soft towels, and premium toiletries.
                  </p>
                </div>
                
              <div className="mt-40">
                <h4>Room Facilities</h4>
                <div className="row room-facility-list mb-40">
                  <div className="col-sm-6 col-xl-4">
                    <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                      <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="far fa-air-conditioner" /></div>
                      <h6 className="title m-0">Air Conditioner</h6>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                      <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="fas fa-swimming-pool" /></div>
                      <h6 className="title m-0">Swimming Pool</h6>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                      <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="fas fa-dumbbell" /></div>
                      <h6 className="title m-0">Gymnasium</h6>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                      <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="fas fa-parking-circle" /></div>
                      <h6 className="title m-0">Parking</h6>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                      <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="fas fa-shield-check" /></div>
                      <h6 className="title m-0">Security</h6>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="list-one d-flex align-items-center me-sm-4">
                      <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="fas fa-child" /></div>
                      <h6 className="title m-0">Playground</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-sm-flex align-items-sm-center justify-content-sm-between pt-40 pb-40 border-top">
                <h6 className="my-sm-0">Share Details</h6>
                <div className="blog-details__social-list">
                  <Link href="#"><i className="fab fa-x-twitter" /></Link>
                  <Link href="#"><i className="fab fa-facebook" /></Link>
                  <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                  <Link href="#"><i className="fab fa-instagram" /></Link>
                </div>
              </div>
              <div className="p-4 p-lg-5 bg-light">
                <h4 className="mt-0">Send Us Your Question</h4>
                <form id="contact_form" name="contact_form" method="post">
                  <div className="row">
                    <div className="col-sm-6 col-xl-4">
                      <div className="mb-3">
                        <input name="form_name" className="form-control bg-white" type="text" placeholder="Enter Name" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      <div className="mb-3">
                        <input name="form_email" className="form-control bg-white required email" type="email" placeholder="Enter Email" />
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="mb-3">
                        <input name="form_phone" className="form-control bg-white required phone" type="number" placeholder="Enter Phone" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea name="form_message" className="form-control bg-white required" rows={5} placeholder="Enter Message"></textarea>
                  </div>
                  <div className="mb-0">
                    <input name="form_botcheck" className="form-control" type="hidden" />
                    <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait...">
                      <span className="btn-title">Submit Comment</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                <div className="kodelisting-room-booking mb-30">
                  <div className="kodelisting-room-booking-wrap">
                    <div className="room-booking-title d-flex align-items-end justify-content-between">
                      <h5 className="title">Reserve:</h5>
                      <span>From <span className="base-price">$299</span>/night</span>
                    </div>
                    <form className="reservation-form" id="contact_form2" name="contact_form" method="post">
                      <div className="row">
                        <div className="col-sm-12 mb-3">
                          <div className="form-floating">
                            <input type="date" name="checkin_date" className="form-control" placeholder="Check In" />
                            <label>Check In</label>
                          </div>
                        </div>
                        <div className="col-sm-12 mb-3">
                          <div className="form-floating">
                            <input type="date" name="checkout_date" className="form-control" placeholder="Check Out" />
                            <label>Check Out</label>
                          </div>
                        </div>
                        <div className="col-sm-12 mb-3">
                          <select className="form-select">
                            <option disabled defaultValue="">Room</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>More</option>
                          </select>
                        </div>
                        <div className="col-sm-6 mb-3">
                          <select className="form-select">
                            <option disabled defaultValue="">Adults</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>More</option>
                          </select>
                        </div>
                        <div className="col-sm-6 mb-3">
                          <select className="form-select">
                            <option disabled defaultValue="">Children</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>More</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="room-booking-title mt-30">
                            <h5 className="title">Extra Services</h5>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="checkbox-row">
                            <label className="checkbox-label custom-checkbox">
                              <input type="checkbox" name="laundry" value="laundry" />
                              Laundry
                            </label>
                            <span className="checkbox-price">$10 / Night</span>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="checkbox-row">
                            <label className="checkbox-label custom-checkbox">
                              <input type="checkbox" name="car_rental" value="Car Rental" />
                              Car Rental
                            </label>
                            <span className="checkbox-price">$10 / Night</span>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="checkbox-row">
                            <label className="checkbox-label custom-checkbox">
                              <input type="checkbox" name="breakfast" value="Breakfast" />
                              Breakfast
                            </label>
                            <span className="checkbox-price">$10 / Night</span>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="checkbox-row">
                            <label className="checkbox-label custom-checkbox">
                              <input type="checkbox" name="sea_view" value="Sea View" />
                              Sea View
                            </label>
                            <span className="checkbox-price">$10 / Night</span>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="checkbox-row mb-30">
                            <label className="checkbox-label custom-checkbox">
                              <input type="checkbox" name="wifi" value="Wifi" />
                              Wifi
                            </label>
                            <span className="checkbox-price">$10 / Night</span>
                          </div>
                        </div>
                        <hr />
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <div className="room-booking-title d-flex align-items-end justify-content-between mt-20">
                            <h5 className="title">Total Cost</h5>
                            <span><span className="base-price price-value">$299</span></span>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="total-base-price">
                            <div className="summary">
                              <div className="price-content d-flex justify-content-between">
                                <div className="label">
                                  Total Base Price <i>i</i>
                                </div>
                                <div className="amount">$299</div>
                              </div>
                              <div className="total d-flex justify-content-between mt-2">
                                <div>Total</div>
                                <div>$299</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3 mt-2">
                        <input name="form_botcheck" className="form-control" type="hidden" />
                        <button type="submit" className="theme-btn btn-style-one w-100" data-loading-text="Please wait...">
                          <span className="btn-title">Book Now</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">Compare Room</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    <li>
                      <div className="sidebar__post-image">
                        <img src="/images/resource/news-info-1.jpg" alt="Economy Room" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta"><i className="fas fa-door-open" />Economy Room</span>
                          <Link href="/">$175/Night</Link>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src="/images/resource/news-info-2.jpg" alt="Deluxe Room" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta"><i className="fas fa-door-open" />Deluxe Room</span>
                          <Link href="/">$250</Link>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        <img src="/images/resource/news-info-1.jpg" alt="Super Deluxe Room" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta"><i className="fas fa-door-open" />Super Deluxe Room</span>
                          <Link href="/">$320</Link>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>    
  );
}
