import Link from 'next/link';
import React from 'react';
import { FadeInUp, FadeInLeft } from '@/lib/animations';

export default function NewsGrid() {
    const data = [
        {
            img: "news-1.jpg",
            date: "DEC<br /><small>20</small>",
            author: "Admin", 
            title: "Avalible Now Health <br />Club For Your Fitness",   
            comment: "0 comments"
        },
        {
            img: "news-2.jpg",
            date: "DEC<br /><small>20</small>",
            author: "Admin",
            title: "Retore Lighting Design <br />in The Hotel", 
            comment: "0 comments"
        },
        {
            img: "news-3.jpg",
            date: "DEC<br /><small>20</small>",
            author: "Admin",
            title: "Swiming Benefits is <br />Good For Your Health", 
            comment: "0 comments"
        },
        {
            img: "news-2.jpg",
            date: "DEC<br /><small>20</small>",
            author: "Admin",
            title: "Avalible Now Health <br />Club For Your Fitness", 
            comment: "0 comments"
        },
        {
            img: "news-3.jpg",
            date: "DEC<br /><small>20</small>",
            author: "Admin",
            title: "Swiming Benefits is <br />Good For Your Health", 
            comment: "0 comments"
        },
        {
            img: "news-1.jpg",
            date: "DEC<br /><small>20</small>",
            author: "Admin",
            title: "Retore Lighting Design <br />in The Hotel",   
            comment: "0 comments"
        }
    ];

    return (
        <>
            <section className="news-section pb-90">
                <div className="auto-container">
                    <div className="row">
                        {data.map((item, NewsGrid) => (
                        <FadeInUp key={NewsGrid} delay={NewsGrid * 0.1} className="news-block col-lg-4 col-md-6 col-sm-12">
                            <FadeInLeft delay={NewsGrid * 0.1 + 0.1} className="inner-box">
                                <div className="image-box">
                                    <figure className="image overlay-anim"><Link href="/news-details"><img src={`images/resource/${item.img}`} alt="Image" /></Link></figure>
                                    <span className="date" dangerouslySetInnerHTML={{ __html: item.date }}></span>
                                </div>
                                <div className="content-box">
                                    <ul className="post-info">
                                        <li><i className="fa fa-user" />{item.author}</li>
                                        <li><i className="fa fa-comments" />{item.comment}</li>
                                    </ul>
                                    <h4 className="title"><Link href="/news-details" dangerouslySetInnerHTML={{ __html: item.title }}></Link></h4>
                                    <Link href="/news-details" className="read-more">Read More<i className="fa-solid fa-arrow-right" /></Link>
                                </div>
                            </FadeInLeft>
                        </FadeInUp>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
