import React from 'react';
import Link from 'next/link';
import Image from "next/image";

function About() {
    return (
        <>

        <section id='about' className="about-section-eight pb-0">
            <div className="outer-box">
                <div className="row">
                    <div className="content-column col-lg-5 col-xl-4">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title style-three">Hoteler LUXURY HOTEL</span>
                                <h2>Your Journey Begins with Our Booking</h2>
                                <div className="text">The main areas of work are architectural design, interior design, project completion, industrial
                                design, ceramic production of decorative items and furniture.</div>
                            </div>
                            <div className="btn-box">
                                <Link href="/page-about" className="theme-btn btn-style-two">
                                    <span className="btn-title">Discover More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-7 col-xl-8">
                        <div className="inner-column">
                            <figure className="image-1 overlay-anim wow tm-gsap-img-parallax overflow-hidden">
                                <Image
                                src="/images/resource/about8-1.jpg"
                                alt="About Image 1"
                                width={600}
                                height={800}
                                layout="responsive"
                                />
                            </figure>
                            <figure className="image-2 wow tm-gsap-img-parallax overflow-hidden">
                                <Image
                                src="/images/resource/about8-2.jpg"
                                alt="About Image 2"
                                width={300}
                                height={200}
                                />
                                <Image
                                src="/images/resource/about8-3.jpg"
                                alt="About Image 3"
                                width={300}
                                height={200}
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-image wow tm-gsap-img-parallax overflow-hidden">
                <Image
                src="/images/background/bg3.jpg"
                alt="Background"
                width={1920}
                height={500}
                layout="responsive" />
            </div>
        </section>

        </>
    )
}
export default About