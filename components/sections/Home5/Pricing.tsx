import React from 'react';
import Link from 'next/link';


function Pricing() {
    return (
        <>
            
        <section className="pricing-section-two">
            <div className="anim-icons">
                <img className="image-1" src="images/icons/shape-8.png" alt="" />
            </div>
            <div className="auto-container">
                <div className="sec-title text-center wow fadeInUp">
                    <span className="sub-title">Hoteler best menus</span>
                    <h2>Specialities Foods</h2>
                </div>
                <div className="row wow slideInUp">
                    <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <figure className="thumb overlay-anim">
                                <Link href="/page-pricing"><img src="images/resource/pricing2-1.png" alt="" /></Link>
                            </figure>
                            <div className="content-box">
                                <h6 className="title">Pasta With Fish<span>$39</span></h6>
                                <span className="designation">Lorem Ipsum is that it smt</span>
                            </div>
                            <span className="food-pack">starter</span>
                        </div>
                    </div>
                    <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <figure className="thumb overlay-anim">
                                <Link href="/page-pricing"><img src="images/resource/pricing2-2.png" alt="" /></Link>
                            </figure>
                            <div className="content-box">
                                <h6 className="title">Noodles<span>$16</span></h6>
                                <span className="designation">Lorem Ipsum is that it smt</span>
                            </div>
                            <span className="food-pack">new</span>
                        </div>
                    </div>
                    <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <figure className="thumb overlay-anim">
                                <Link href="/page-pricing"><img src="images/resource/pricing2-3.png" alt="" /></Link>
                            </figure>
                            <div className="content-box">
                                <h6 className="title">Fresh Meat<span>$26</span></h6>
                                <span className="designation">Lorem Ipsum is that it smt</span>
                            </div>
                            <span className="food-pack">new</span>
                        </div>
                    </div>
                    <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <figure className="thumb overlay-anim">
                                <Link href="/page-pricing"><img src="images/resource/pricing2-4.png" alt="" /></Link>
                            </figure>
                            <div className="content-box">
                                <h6 className="title">Chicken<span>$19</span></h6>
                                <span className="designation">Lorem Ipsum is that it smt</span>
                            </div>
                            <span className="food-pack">vegan</span>
                        </div>
                    </div>
                    <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <figure className="thumb overlay-anim">
                                <Link href="/page-pricing"><img src="images/resource/pricing2-5.png" alt="" /></Link>
                            </figure>
                            <div className="content-box">
                                <h6 className="title">Spaghetti<span>$37</span></h6>
                                <span className="designation">Lorem Ipsum is that it smt</span>
                            </div>
                            <span className="food-pack">new</span>
                        </div>
                    </div>
                    <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <figure className="thumb overlay-anim">
                                <Link href="/page-pricing"><img src="images/resource/pricing2-6.png" alt="" /></Link>
                            </figure>
                            <div className="content-box">
                                <h6 className="title">Vegetarian Fried<span>$34</span></h6>
                                <span className="designation">Lorem Ipsum is that it smt</span>
                            </div>
                            <span className="food-pack">new</span>
                        </div>
                    </div>
                    <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <figure className="thumb overlay-anim">
                                <Link href="/page-pricing"><img src="images/resource/pricing2-7.png" alt="" /></Link>
                            </figure>
                            <div className="content-box">
                                <h6 className="title">Vegetarian Soup<span>$42</span></h6>
                                <span className="designation">Lorem Ipsum is that it smt</span>
                            </div>
                            <span className="food-pack">glutan free</span>
                        </div>
                    </div>
                    <div className="pricing-block-two col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <figure className="thumb overlay-anim">
                                <Link href="/page-pricing"><img src="images/resource/pricing2-8.png" alt="" /></Link>
                            </figure>
                            <div className="content-box">
                                <h6 className="title">Salmon Pasta<span>$71</span></h6>
                                <span className="designation">Lorem Ipsum is that it smt</span>
                            </div>
                            <span className="food-pack">fish</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Pricing