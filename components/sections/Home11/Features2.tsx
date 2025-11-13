import React from 'react';
import Link from "next/link";
import Image from "next/image";

const features2 = [
    {
      img: "/images/resource/feature3-1.jpg",
      title: "Pre - Booking",
      link: "/room-details",
      delay: "100ms",
      extraClass: "",
    },
    {
      img: "/images/resource/feature3-2.jpg",
      title: "Swimming Pool",
      link: "/room-details",
      delay: "200ms",
      extraClass: "mt-40",
    },
    {
      img: "/images/resource/feature3-3.jpg",
      title: "Buffet Dinner",
      link: "/room-details",
      delay: "300ms",
      extraClass: "",
    },
];

function Features2() {
    return (
        <>

        <section className="feature-section-four pt-0">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="sec-title">
                                <span className="sub-title">Hoteler HOTEL</span>
                                <h3>Your Perfect Stay, Our Priority</h3>
                                <div className="text">Hoteler in a powerful way of just not an only professions, however, in a passion for our Company.</div>
                                <div className="btn-box">
                                    <Link href="/page-about" className="theme-btn btn-style-two">
                                        <span className="btn-title">Discover More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="outer-box">
                                <div className="row">
                                    {features2.map((item, index) => (
                                        <div className={`feature-block-four col-lg-4 col-sm-6 wow fadeIn ${item.extraClass}`}
                                        data-wow-delay={item.delay}
                                        key={index}>
                                            <div className="inner-box">
                                                <figure className="image">
                                                    <Image src={item.img} alt={item.title} width={300} height={200} layout="responsive" />
                                                </figure>
                                                <div className="content-box">
                                                    <h4 className="title">
                                                        <Link href={item.link}>{item.title}</Link>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default Features2