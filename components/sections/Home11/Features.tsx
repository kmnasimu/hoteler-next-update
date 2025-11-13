import React from 'react';
import Link from "next/link";

const features = [
    {
      icon: "flaticon-light",
      title: "Pick up & Drop",
      link: "/room-details",
      delay: "100ms",
    },
    {
      icon: "flaticon-wifi",
      title: "Free Internet",
      link: "/room-details",
      delay: "200ms",
    },
    {
      icon: "flaticon-travel",
      title: "Pre - Booking",
      link: "/room-details",
      delay: "300ms",
    },
];

function Features() {
    return (
        <>

        <section className="feature-section-three">
            <div className="auto-container">
                <div className="row">
                {features.map((feature, index) => (
                    <div className="feature-block-three col-lg-4 col-sm-6" key={index}>
                    <div className="inner-box wow fadeIn" data-wow-delay={feature.delay}>
                        <div className="icon-box">
                        <i className={feature.icon}></i>
                        </div>
                        <div className="content-box">
                        <h4 className="title">
                            <Link href={feature.link}>{feature.title}</Link>
                        </h4>
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictum consequat nunc nisl morbi
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>

        </>
    )
}
export default Features