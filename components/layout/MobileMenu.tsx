'use client';

import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 0,
    });

    const handleClick = (key: number) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: 0,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    const [isSubActive, setSubIsActive] = useState({
        status: false,
        key: 0,
    });

    const handleSubClick = (key: number) => {
        if (isSubActive.key === key) {
            setSubIsActive({
                status: false,
                key: 0,
            });
        } else {
            setSubIsActive({
                status: true,
                key,
            });
        }
    };



    return (
        <>

            <ul className="navigation">
                <li className="dropdown">
                    <Link href="/">Home</Link>
                    <ul className={isActive.key === 1 ? "d-block" : "d-none"}>
                        <li><Link href="/">Home page 01</Link></li>
                        <li><Link href="/home2">Home page 02</Link></li>
                        <li><Link href="/home3">Home page 03</Link></li>
                        <li><Link href="/home4">Home page 04</Link></li>
                        <li><Link href="/home5">Home page 05</Link></li>
                        <li><Link href="/home6">Home page 06</Link></li>
                        <li className="dropdown">
                            <Link href="/">More Home</Link>
                            <ul className={isSubActive.key === 1 ? "d-block" : "d-none"}>
                                <li><Link href="/home7">Home page 07</Link></li>
                                <li><Link href="/home8">Home page 08</Link></li>
                                <li><Link href="/home9">Home page 09</Link></li>
                                <li><Link href="/home10">Home page 10</Link></li>
                                <li><Link href="/home11">Home page 11</Link></li>
                                <li><Link href="/home12">Home page 12</Link></li>
                            </ul>
                            <div className={isSubActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(1)}><i className="fa fa-angle-down"></i></div>
                        </li>
                        <li className="dropdown">
                            <Link href="/">Dark Home</Link>
                            <ul className={isSubActive.key === 2 ? "d-block" : "d-none"}>
                                <li><Link href="/home1-dark">Dark Home 01</Link></li>
                                <li><Link href="/home2-dark">Dark Home 02</Link></li>
                                <li><Link href="/home3-dark">Dark Home 03</Link></li>
                                <li><Link href="/home4-dark">Dark Home 04</Link></li>
                                <li><Link href="/home5-dark">Dark Home 05</Link></li>
                                <li><Link href="/home6-dark">Dark Home 06</Link></li>
                                <li><Link href="/home7-dark">Dark Home 07</Link></li>
                                <li><Link href="/home8-dark">Dark Home 08</Link></li>
                                <li><Link href="/home9-dark">Dark Home 09</Link></li>
                                <li><Link href="/home10-dark">Dark Home 10</Link></li>
                                <li><Link href="/home11-dark">Dark Home 11</Link></li>
                                <li><Link href="/home12-dark">Dark Home 12</Link></li>
                            </ul>
                            <div className={isSubActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(2)}><i className="fa fa-angle-down"></i></div>
                        </li>
                        <li className="dropdown">
                            <Link href="/">Single Home</Link>
                            <ul className={isSubActive.key === 3 ? "d-block" : "d-none"}>
                                <li><Link href="/home1-single">Single Home 01</Link></li>
                                <li><Link href="/home2-single">Single Home 02</Link></li>
                                <li><Link href="/home3-single">Single Home 03</Link></li>
                                <li><Link href="/home4-single">Single Home 04</Link></li>
                                <li><Link href="/home5-single">Single Home 05</Link></li>
                                <li><Link href="/home6-single">Single Home 06</Link></li>
                                <li><Link href="/home7-single">Single Home 07</Link></li>
                                <li><Link href="/home8-single">Single Home 08</Link></li>
                                <li><Link href="/home9-single">Single Home 09</Link></li>
                                <li><Link href="/home10-single">Single Home 10</Link></li>
                                <li><Link href="/home11-single">Single Home 11</Link></li>
                                <li><Link href="/home12-single">Single Home 12</Link></li>
                            </ul>
                            <div className={isSubActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(3)}><i className="fa fa-angle-down"></i></div>
                        </li>
                        <li><Link href="/home1-rtl">RTL Home</Link></li>
                    </ul>
                    <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}><i className="fa fa-angle-down"></i></div>
                </li>
                <li className="dropdown">
                    <Link href="/">Rooms & Suites</Link>
                    <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
                        <li><Link href="/rooms">Rooms</Link></li>
                        <li><Link href="/rooms-suite">Rooms and Suits</Link></li>
                        <li><Link href="/room-details">Room Details</Link></li>
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i className="fa fa-angle-down"></i></div>
                </li>
                <li className="dropdown">
                    <Link href="/">Pages</Link>
                    <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/faq">Faq</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li className="dropdown">
                            <Link href="/">Services</Link>
                            <ul className={isSubActive.key === 4 ? "d-block" : "d-none"}>
                                <li><Link href="/services">Services List</Link></li>
                                <li><Link href="/service-details">Services Details</Link></li>
                            </ul>
                            <div className={isSubActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(4)}><i className="fa fa-angle-down"></i></div>
                        </li>
                        <li className="dropdown">
                            <Link href="/">Team</Link>
                            <ul className={isSubActive.key === 5 ? "d-block" : "d-none"}>
                                <li><Link href="/team">Team List</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                            <div className={isSubActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(5)}><i className="fa fa-angle-down"></i></div>
                        </li>
                        <li className="dropdown">
                            <Link href="/">Shop</Link>
                            <ul className={isSubActive.key === 6 ? "d-block" : "d-none"}>
                                <li><Link href="/shop-products">Products</Link></li>
                                <li><Link href="/shop-products-sidebar">Products with Sidebar</Link></li>
                                <li><Link href="/shop-product-details">Product Details</Link></li>
                                <li><Link href="/shop-cart">Cart</Link></li>
                                <li><Link href="/shop-checkout">Checkout</Link></li>
                            </ul>
                            <div className={isSubActive.key === 6 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(6)}><i className="fa fa-angle-down"></i></div>
                        </li>
                        <li><Link href="/testimonial">Testimonials</Link></li>
                        <li><Link href="/not-found-page">404</Link></li>
                    </ul>
                    <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}><i className="fa fa-angle-down"></i></div>
                </li>
                <li className="dropdown">
                    <Link href="/">News</Link>
                    <ul className={isActive.key === 4 ? "d-block" : "d-none"}>
                        <li><Link href="/news-grid">News Grid</Link></li>
                        <li><Link href="/news-details">News Details</Link></li>
                    </ul>
                    <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)}><i className="fa fa-angle-down"></i></div>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>

        </>
    );
};

export default MobileMenu;
