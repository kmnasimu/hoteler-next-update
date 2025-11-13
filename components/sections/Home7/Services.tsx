import React from 'react';
import Link from 'next/link';

const service = [
    {
      iconClass: 'flaticon-bed-2',
      title: 'Room Service',
      link: '/room-details',
      description: 'Orci varius natoque penatibus magnis ders disney parturient ridiculus',
      delay: '100ms',
    },
    {
      iconClass: 'flaticon-travel',
      title: 'Pick Up & Drop',
      link: '/room-details',
      description: 'Orci varius natoque penatibus magnis ders disney parturient ridiculus',
      delay: '200ms',
    },
    {
      iconClass: 'flaticon-wifi',
      title: 'Fibre Internet',
      link: '/room-details',
      description: 'Orci varius natoque penatibus magnis ders disney parturient ridiculus',
      delay: '300ms',
    },
    {
      iconClass: 'flaticon-breakfast',
      title: 'Breakfast',
      link: '/room-details',
      description: 'Orci varius natoque penatibus magnis ders disney parturient ridiculus',
      delay: '400ms',
    },
    {
      iconClass: 'flaticon-swimming-pool',
      title: 'Swimming Pool',
      link: '/room-details',
      description: 'Orci varius natoque penatibus magnis ders disney parturient ridiculus',
      delay: '500ms',
    },
    {
      iconClass: 'flaticon-car',
      title: 'Parking Space',
      link: '/room-details',
      description: 'Orci varius natoque penatibus magnis ders disney parturient ridiculus',
      delay: '600ms',
    },
];

function Services (){  

  return (
    <>

    <section className="service-section">
        <div className="anim-icons">
            <img className="image-1" src="/images/icons/shape-1.png" alt="" />
            <img className="image-2" src="/images/icons/shape-2.png" alt="" />
        </div>
        <div className="auto-container">
            <div className="sec-title text-center">
                <span className="sub-title">Hoteler SERVICES</span>
                <h2>Hotel Facilities</h2>
            </div>
            <div className="row">
                {service.map((service, index) => (
                <div className="service-block col-lg-4 col-sm-6" key={index}>
                    <div className="inner-box wow fadeIn" data-wow-delay={service.delay}>
                        <div className="icon-box wow fadeInUp"><i className={service.iconClass}></i></div>
                        <div className="content-box">
                            <h4 className="title"><Link href={service.link}>{service.title}</Link></h4>
                            <div className="text">{service.description}</div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
    </>

  );
};

export default Services;