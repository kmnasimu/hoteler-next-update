import Link from 'next/link';
import React from 'react';

export default function ProjectGrid (){
    const data = [
        {
            img: "project-1.jpg",
            title: "Digital Marketing",
            categories: "Technology / Marketing",
        },
        {
            img: "project-2.jpg",
            title: "Analytic Solution",
            categories: "Agency / Branding",
        },
        {
            img: "project-3.jpg",
            title: "Tech Solution",
            categories: "Cyberdeck / Promotion",
        },
        {
            img: "project-4.jpg",
            title: "Marketing Cleaning",
            categories: "Development / HTML",
        },
        {
            img: "project-1.jpg",
            title: "Digital Marketing",
            categories: "Technology / Marketing",
        },
        {
            img: "project-2.jpg",
            title: "Analytic Solution",
            categories: "Agency / Branding",
        }
    ];
    
    return (
        <>
            <section className="project-section pb-90">
                <div className="auto-container">
                    <div className="row wow fadeInUp">
                        {data.map((item, ProjectGrid) => (
                            <div key={ProjectGrid} className="col-xl-4 col-sm-6 mb-30">
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href={`images/resource/${item.img}`} className="lightbox-image"><img src={`images/resource/${item.img}`} alt="Image" /></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        </div>
                                        <div className="content-box">
                                            <h3 className="title"><Link href="page-project-details">{item.title}</Link></h3>
                                            <span className="cat">{item.categories}</span>
                                        </div>
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