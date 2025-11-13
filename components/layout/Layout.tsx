'use client';

import React, { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import FooterRTL from './FooterRTL';
import Header from './Header';
import HeaderRTL from './HeaderRTL';
import Header2 from './Header2';
import Header3 from './Header3';
import Header4 from './Header4';
import Header5 from './Header5';
import Header6 from './Header6';
import Header7 from './Header7';
import Header8 from './Header8';
import Header9 from './Header9';
import Header10 from './Header10';
import PageHead from './PageHead';

type LayoutProps = {
    children?: React.ReactNode;
    HeaderStyle?: string | null;
    FooterStyle?: string | null;
    darkMode?: string | boolean;
    menuType?: string | null;
    rtl?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ children, HeaderStyle, FooterStyle, darkMode, menuType, rtl }) => {
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(false);
    const handleToggle = () => setSearchToggled(!searchToggle);
    
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            setScroll(scrollCheck);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') return;
        
        const isDarkMode = darkMode === '1' || darkMode === true;
        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            // Load dark mode CSS only when needed
            const darkCssId = 'style-dark-css';
            if (!document.getElementById(darkCssId)) {
                const link = document.createElement('link');
                link.id = darkCssId;
                link.rel = 'stylesheet';
                link.href = '/css/style-dark.css';
                document.head.appendChild(link);
            }
        } else {
            document.body.classList.remove('dark-mode');
            // Remove dark mode CSS when not needed
            const darkCss = document.getElementById('style-dark-css');
            if (darkCss && darkCss.parentNode) {
                darkCss.parentNode.removeChild(darkCss);
            }
        }
    }, [darkMode]);

    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') return;
        
        if (rtl) {
            document.body.classList.add('rtl');
            try {
                document.documentElement.setAttribute('dir', 'rtl');
            } catch (e) {
                // Ignore errors
            }
            try {
                const def = document.getElementById('style-default-css');
                if (def && def.parentNode) def.parentNode.removeChild(def);
            } catch (e) {
                // Ignore errors
            }
            try {
                const id = 'style-rtl-css';
                if (!document.getElementById(id)) {
                    const link = document.createElement('link');
                    link.id = id;
                    link.rel = 'stylesheet';
                    link.href = '/css/style-rtl.css';
                    document.head.appendChild(link);
                }
            } catch (e) {
                // Ignore errors
            }
        } else {
            document.body.classList.remove('rtl');
            try {
                document.documentElement.removeAttribute('dir');
            } catch (e) {
                // Ignore errors
            }
            try {
                const id = 'style-default-css';
                if (!document.getElementById(id)) {
                    const link = document.createElement('link');
                    link.id = id;
                    link.rel = 'stylesheet';
                    link.href = '/css/style.css';
                    document.head.appendChild(link);
                }
            } catch (e) {
                // Ignore errors
            }
            try {
                const el = document.getElementById('style-rtl-css');
                if (el && el.parentNode) el.parentNode.removeChild(el);
            } catch (e) {
                // Ignore errors
            }
        }
    }, [rtl]);

    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') return;
        
        if (menuType === 'single') {
            document.body.classList.add('single-menu');
        } else {
            document.body.classList.remove('single-menu');
        }
    }, [menuType]);

    const handleOpen = () => {
        if (typeof document === 'undefined') return;
        document.body.classList.add("mobile-menu-visible");
    };

    const handleRemove = () => {
        if (typeof document === 'undefined') return;
        document.body.classList.remove("mobile-menu-visible");
    };

    const headerProps = {
        handleOpen,
        handleRemove,
        searchToggle,
        handleToggle,
        scroll,
    };

    return (
        <>
            <PageHead />
            <div className="page-wrapper" id="top">
                {!HeaderStyle && <Header {...headerProps} />}
                {HeaderStyle === "rtl1" && <HeaderRTL {...headerProps} />}
                {HeaderStyle === "two" && <Header2 {...headerProps} />}
                {HeaderStyle === "three" && <Header3 {...headerProps} />}
                {HeaderStyle === "four" && <Header4 {...headerProps} />}
                {HeaderStyle === "five" && <Header5 {...headerProps} />}
                {HeaderStyle === "six" && <Header6 {...headerProps} />}
                {HeaderStyle === "seven" && <Header7 {...headerProps} />}
                {HeaderStyle === "eight" && <Header8 {...headerProps} />}
                {HeaderStyle === "nine" && <Header9 {...headerProps} />}
                {HeaderStyle === "ten" && <Header10 {...headerProps} />}

                {children}

                {!FooterStyle && <Footer />}
                {FooterStyle === "footerRTL" && <FooterRTL />}
            </div>
            <BackToTop />
        </>
    );
};

export default Layout;
