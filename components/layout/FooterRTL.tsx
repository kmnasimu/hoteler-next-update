import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <>
            
        <footer className="main-footer footer-style-one">
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="footer-column col-lg-4 col-sm-6">
                            <div className="footer-widget about-widget wow fadeInLeft">
                                <div className="widget-content">
                                    <div className="logo"><Link href="/"><img src="images/logo-2.png" alt="" /></Link></div>
                                    <div className="text mb-0">لا تتردد في التواصل معنا إذا كنت ترغب في التعاون معنا، أو الدردشة ببساطة.</div>
                                </div>
                            </div>
                            <div className="footer-widget news-widget wow fadeInLeft" data-wow-delay="400ms">
                                <div className="subscribe-form-three">
                                    <form method="post" action="/">
                                        <div className="form-group">
                                            <input type="email" name="email" className="email" placeholder="عنوان البريد الإلكتروني" required />
                                            <button type="button" className="theme-btn btn-style-one"><span className="btn-title"><i className="fa fa-paper-plane" /></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="footer-widget widget-social wow fadeInLeft" data-wow-delay="300ms">
                                <h4 className="widget-title">تابعنا</h4>
                                <div className="widget-content">
                                    <ul className="social-icon">
                                        <li><Link href="/"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/"><i className="fa-brands fa-instagram" /></Link></li>
                                        <li><Link href="/"><i className="fa-brands fa-linkedin" /></Link></li>
                                        <li><Link href="/"><i className="fa-brands fa-whatsapp" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-column col-lg-3 col-sm-6 mb-0 ps-xl-5">
                            <div className="footer-widget links-widget ps-xl-5 wow fadeInLeft" data-wow-delay="200ms">
                                <h4 className="widget-title">خدمات</h4>
                                <div className="widget-content">
                                    <ul className="user-links">
                                        <li><Link href="/">دليل المتجر</Link></li>
                                        <li><Link href="/">أفضل الفنادق</Link></li>
                                        <li><Link href="/">روابط سريعة</Link></li>
                                        <li><Link href="/">روابط مهمة</Link></li>
                                        <li><Link href="/">رؤى</Link></li>
                                        <li><Link href="/">مركز المعرفة</Link></li>
                                    </ul>
                                </div>
                            </div>                       
                        </div>
                        <div className="footer-column col-lg-2 col-sm-6 mb-0 ps-xl-4">
                            <div className="footer-widget links-widget ps-xl-4 wow fadeInLeft" data-wow-delay="200ms">
                                <h4 className="widget-title">شركة</h4>
                                <div className="widget-content">
                                    <ul className="user-links">
                                        <li><Link href="/">بيت</Link></li>
                                        <li><Link href="/">معلومات عنا</Link></li>
                                        <li><Link href="/">خدمات</Link></li>
                                        <li><Link href="/">حياة مهنية</Link></li>
                                        <li><Link href="/">اتصال</Link></li>
                                    </ul>
                                </div>
                            </div>                       
                        </div>
                        <div className="footer-column col-lg-3 col-sm-6">
                            <div className="footer-widget info-widget ps-xl-5 ms-xl-5 mb-30 wow fadeInLeft" data-wow-delay="300ms">
                                <h4 className="widget-title">نيويورك</h4>
                                <div className="widget-content">
                                    <div className="contact-list">
                                        <div className="inner">
                                            <div className="list-info">۲۴۶۴ رويال لين، ميسا، نيو جيرسي ۴۵۴۶۳</div>
                                            <div className="list-info">(۰۰۰) ۲۲۲-۰۰۰۰</div>
                                            <div className="list-info">معلومات@شركة.كوم</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-widget info-widget ps-xl-5 ms-xl-5 wow fadeInLeft" data-wow-delay="300ms">
                                <h4 className="widget-title">لندن</h4>
                                <div className="widget-content">
                                    <div className="contact-list">
                                        <div className="inner">
                                            <div className="list-info">۱۹۰۱ دائرة ثورن ريدج، شيلوه، هاواي ۸۱۰۶۳</div>
                                            <div className="list-info">(۰۰۰) ۰۰۰-۰۰۰۰</div>
                                            <div className="list-info">معلومات@شركة.كوم</div>
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
                        <div className="copyright-text">© ۲۰۲۵ <span>موضوع التميمة</span> وكالة</div>
                    </div>
                </div>
            </div>
        </footer>

        </>
    );
};

export default Footer;