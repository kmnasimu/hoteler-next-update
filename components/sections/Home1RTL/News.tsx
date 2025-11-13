"use client";
import React from 'react';
import Link from 'next/link';


function News() {
    return (
        <>

        <section id='news' className="news-section">
            <div className="auto-container">
                <div className="sec-title text-center wow fadeInUp">
                    <span className="sub-title">الأخبار والمدونة</span>
                    <h2>تحقق من أحدث مشاركة في المدونة <br />من قائمة المدونات</h2>
                </div>
                <div className="row">
                    <div className="news-block-four col-lg-4 col-md-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="/news-details">
                                        <img src="images/resource/news1-1.jpg" alt="Image" />
                                        <img src="images/resource/news1-1.jpg" alt="Image" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li className="categories"><Link href="/news-details">منطقة الاسترخاء</Link></li>
                                    <li className="date">يمكن ۱۵, ۲۰۲۵</li>
                                </ul>
                                <h4 className="title"><Link href="/news-details">مزايا تقديم التسجيل عبر الإنترنت في فندقك</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="news-block-four col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="/news-details">
                                        <img src="images/resource/news1-2.jpg" alt="Image" />
                                        <img src="images/resource/news1-2.jpg" alt="Image" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li className="categories"><Link href="/news-details">جناح ملكي</Link></li>
                                    <li className="date">يناير ۲۸, ۲۰۲۵</li>
                                </ul>
                                <h4 className="title"><Link href="/news-details">نادينا الصحي متاح الآن لتلبية احتياجاتك في اللياقة البدنية</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="news-block-four col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                    <Link href="/news-details">
                                        <img src="images/resource/news1-3.jpg" alt="Image" />
                                        <img src="images/resource/news1-3.jpg" alt="Image" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-meta">
                                    <li className="categories"><Link href="/news-details">شقق</Link></li>
                                    <li className="date">أكتوبر ۲۰, ۲۰۲۵</li>
                                </ul>
                                <h4 className="title"><Link href="/news-details">استعادة تصميم الإضاءة في الفندق</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default News