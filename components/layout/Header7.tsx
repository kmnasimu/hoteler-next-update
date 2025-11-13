import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

import { HeaderProps } from '@/types/header';

const Header7 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }: HeaderProps) => {

    return (
        <>

        <header className={`main-header header-style-three style-home2 ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
            <div className="header-top">
                <div className="auto-container">
                    <div className="inner-box">
                        <div className="top-left">
                            <span><i className="icon fa-solid fa-envelope" /> needhelp@company.com</span>
                            <span><i className="icon fa-sharp fa-solid fa-location-dot" /> 88 Broklyn Golden Street. New York</span>
                        </div>
                        <div className="top-right">
                            <ul className="social-icon-one">
                                <li><Link href="/"><i className="fab fa-facebook-f" /></Link></li>
                                <li><Link href="/"><i className="fa-brands fa-instagram" /></Link></li>
                                <li><Link href="/"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                <li><Link href="/"><i className="fab fa-x-twitter" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-lower">
                <div className="auto-container">
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo"><Link href="/"><img src="images/logo.png" alt="" title="Hoteler" /></Link></div>
                        </div>
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <NavLinks/>
                            </nav>
                        </div>
                        <div className="outer-box">
                            <div className="ui-btn-outer">
                                <button className="ui-btn ui-btn search-btn" onClick={handleToggle}>
                                    <span className="icon lnr lnr-icon-search" />
                                </button>
                                <Link href="/shop-cart" className="ui-btn cart-btn">
                                    <i className="lnr-icon-shopping-cart" />
                                    <span className="items-count">0</span>
                                </Link>
                            </div>
                            <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleRemove} />		
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo"><Link href="/"><img src="images/logo-2.png" alt="" /></Link></div>
                        <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times" /></div>
                    </div>
                    <ul className="navigation clearfix">
                        <MobileMenu/>
                    </ul>
                    <ul className="contact-list-one">
                        <li>
                            <div className="contact-info-box">
                                <i className="icon lnr-icon-phone-handset" />
                                <span className="title">Call Now</span>
                                <Link href="tel:+92880098670">+92 (8800) - 98670</Link>
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-envelope1" />
                                <span className="title">Send Email</span>
                                <Link href="mailto:help@company.com">help@company.com</Link>
                            </div>
                        </li>
                        <li>
                            <div className="contact-info-box">
                                <span className="icon lnr-icon-clock" />
                                <span className="title">Send Email</span>
                                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </div>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li><Link href="/"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="/"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="/"><i className="fab fa-pinterest" /></Link></li>
                        <li><Link href="/"><i className="fab fa-instagram" /></Link></li>
                    </ul>
                </nav>
            </div>
            <div className="search-popup">
                <span className="search-back-drop" onClick={handleToggle} />
                <button className="close-search" onClick={handleToggle}><span className="fa fa-times" /></button>
                <div className="search-inner">
                    <form method="get" action="/">
                        <div className="form-group">                                
                            <input 
                                type="search" 
                                name="search-field" 
                                defaultValue="search"
                                placeholder="Search..." 
                                required 
                            />
                            <button type="submit"><i className="fa fa-search" /></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="logo">
                            <Link href="/"><img src="images/logo-2.png" alt="" /></Link>
                        </div>
                        <div className="nav-outer">
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                    <NavLinks/>
                                </div>
                            </nav>
                            <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        </>
    );
};

export default Header7;