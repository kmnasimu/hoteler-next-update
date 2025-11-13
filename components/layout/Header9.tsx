import React from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

const Header9 = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {



    return (
        <>

        <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
            <div className="auto-container">
                <div className="header-top">
                    <div className="inner-box">
                        <div className="top-left">
                            <span><i className="icon fa fa-location" />1247/Plot No. 39, 15th Phase, USA</span>
                        </div>
                        <div className="top-right">
                            <ul className="social-icon-one">
                                <li>Follow Us :</li>
                                <li><Link href="/"><i className="fab fa-facebook" /></Link></li>
                                <li><Link href="/"><i className="fab fa-x-twitter" /></Link></li>
                                <li><Link href="/"><i className="fa-brands fa-linkedin" /></Link></li>
                                <li><Link href="/"><i className="fab fa-youtube" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-box">
                    <div className="logo-box">
                        <div className="logo"><Link href="/"><img src="images/logo-2.png" alt="" title="Hoteler" /></Link></div>
                    </div>
                    <div className="nav-outer">
                        <nav className="nav main-menu">
                            <NavLinks />
                        </nav>
                    </div>
                    <div className="outer-box">
                        <button className="search-btn" onClick={handleToggle}>
                            <img src="images/icons/search.png" alt="" />
                        </button>
                        <div className="mobile-nav-toggler" onClick={handleOpen}><i className="icon lnr-icon-bars" /></div>
                    </div>
                </div>
            </div>
            
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleRemove} />
                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo"><Link href=""><img src="images/logo-2.png" alt="" /></Link></div>
                        <div className="close-btn"  onClick={handleRemove}><i className="icon fa fa-times" /></div>
                    </div>
                    <MobileMenu/>
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
                    <div className="logo"><Link href=""><img src="images/logo-2.png" alt="" /></Link></div>
                        <div className="nav-outer">
                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                    <NavLinks/>
                                </div>
                            </nav>
                            <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        </>
    );
};

export default Header9;