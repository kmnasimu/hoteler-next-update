import React from 'react';
import Link from 'next/link';

function About() {
    return (
        <>

        <section id='about' className="about-section-five">
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-5 order-lg-2">
                        <div className="inner-column">
                            <div className="sec-title">
                            <span className="sub-title">Hoteler LUXURY HOTEL</span>
                            <h2>Find Your Home Away from Home</h2>
                            <div className="text">Roomaroo in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website.</div>
                            </div>
                            <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about5-1.jpg" alt="" /></figure>
                            <figure className="image-2 bounce-z"><img src="images/icons/text-1.png" alt="" /></figure>
                        </div>
                    </div>
                    <div className="image-column col-lg-7">
                        <div className="inner-column wow fadeInLeft">
                            <figure className="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about5-2.jpg" alt="" /></figure>
                            <h2 className="title">Luxury Hotels</h2>
                            <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum has been the industry's standard dummy text <br />ever since the 1500s, </div>
                            <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default About