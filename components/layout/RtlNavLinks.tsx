import Link from 'next/link';
import React from 'react';

function RtlNavLinks () {
    return (
        <ul className="navigation">
            <li className="dropdown">
                <Link href="/">بيت</Link>
                <ul>
                    <li><Link href="/">الصفحة الرئيسية ۰۱</Link></li>
                    <li><Link href="/home2">الصفحة الرئيسية ۰۲</Link></li>
                    <li><Link href="/home3">الصفحة الرئيسية ۰۳</Link></li>
                    <li><Link href="/home4">الصفحة الرئيسية ۰٤</Link></li>
                    <li><Link href="/home5">الصفحة الرئيسية ۰٥</Link></li>
                    <li><Link href="/home6">الصفحة الرئيسية ۰٦</Link></li>
                    <li className="dropdown">
                        <Link href="/">المزيد من المنزل</Link>
                        <ul>
                            <li><Link href="/home7">الصفحة الرئيسية ۰۷</Link></li>
                            <li><Link href="/home8">الصفحة الرئيسية ۰۸</Link></li>
                            <li><Link href="/home9">الصفحة الرئيسية ۰۹</Link></li>
                            <li><Link href="/home10">الصفحة الرئيسية ۱۰</Link></li>
                            <li><Link href="/home11">الصفحة الرئيسية ۱۱</Link></li>
                            <li><Link href="/home12">الصفحة الرئيسية ۱۲</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link href="/">المنزل المظلم</Link>
                        <ul>
                            <li><Link href="/home1-dark">المنزل المظلم ۰۱</Link></li>
                            <li><Link href="/home2-dark">المنزل المظلم ۰۲</Link></li>
                            <li><Link href="/home3-dark">المنزل المظلم ۰۳</Link></li>
                            <li><Link href="/home4-dark">المنزل المظلم ۰٤</Link></li>
                            <li><Link href="/home5-dark">المنزل المظلم ۰٥</Link></li>
                            <li><Link href="/home6-dark">المنزل المظلم ۰٦</Link></li>
                            <li><Link href="/home7-dark">المنزل المظلم ۰۷</Link></li>
                            <li><Link href="/home8-dark">المنزل المظلم ۰۸</Link></li>
                            <li><Link href="/home9-dark">المنزل المظلم ۰۹</Link></li>
                            <li><Link href="/home10-dark">المنزل المظلم ۱۰</Link></li>
                            <li><Link href="/home11-dark">المنزل المظل ۱۱</Link></li>
                            <li><Link href="/home12-dark">المنزل المظلم ۱۲</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link href="/">منزل واحد</Link>
                        <ul>
                            <li><Link href="/home1-single">منزل واحد ۰۱</Link></li>
                            <li><Link href="/home2-single">منزل واحد ۰۲</Link></li>
                            <li><Link href="/home3-single">منزل واحد ۰۳</Link></li>
                            <li><Link href="/home4-single">منزل واحد ۰٤</Link></li>
                            <li><Link href="/home5-single">منزل واحد ۰٥</Link></li>
                            <li><Link href="/home6-single">منزل واحد ۰٦</Link></li>
                            <li><Link href="/home7-single">منزل واحد ۰۷</Link></li>
                            <li><Link href="/home8-single">منزل واحد ۰۸</Link></li>
                            <li><Link href="/home9-single">منزل واحد ۰۹</Link></li>
                            <li><Link href="/home10-single">منزل واحد ۱۰</Link></li>
                            <li><Link href="/home11-single">منزل واحد ۱۱</Link></li>
                            <li><Link href="/home12-single">منزل واحد ۱۲</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/home1-rtl">الصفحة الرئيسية</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <Link href="/">الغرف والأجنحة</Link>
                <ul>
                    <li><Link href="/rooms">الغرف</Link></li>
                    <li><Link href="/rooms-suite">الغرف والأجنحة</Link></li>
                    <li><Link href="/room-details">تفاصيل الغرفة</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <Link href="/">الصفحات</Link>
                <ul>
                    <li><Link href="/about">عن</Link></li>
                    <li><Link href="/faq">التعليمات</Link></li>
                    <li><Link href="/pricing">التسعير</Link></li>
                    <li className="dropdown">
                        <Link href="/">خدمات</Link>
                        <ul>
                            <li><Link href="/services">قائمة الخدمات</Link></li>
                            <li><Link href="/service-details">تفاصيل الخدمات</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link href="/">فريق</Link>
                        <ul>
                            <li><Link href="/team">قائمة الفريق</Link></li>
                            <li><Link href="/team-details">تفاصيل الفريق</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link href="/">محل</Link>
                        <ul>
                            <li><Link href="/shop-products">منتجات</Link></li>
                            <li><Link href="/shop-products-sidebar">المنتجات ذات الشريط الجانبي</Link></li>
                            <li><Link href="/shop-product-details">تفاصيل المنتج</Link></li>
                            <li><Link href="/shop-cart">عربة التسوق</Link></li>
                            <li><Link href="/shop-checkout">الدفع</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/testimonial">شهادات العملاء</Link></li>
                    <li><Link href="/not-found-page">٤۰٤</Link></li>
                </ul>
            </li>
            <li className="dropdown">
                <Link href="/">أخبار</Link>
                <ul>
                    <li><Link href="/news-grid">شبكة الأخبار</Link></li>
                    <li><Link href="/news-details">تفاصيل الأخبار</Link></li>
                </ul>
            </li>
            <li><Link href="/contact">اتصال</Link></li>
        </ul>

    );
};

export default RtlNavLinks;