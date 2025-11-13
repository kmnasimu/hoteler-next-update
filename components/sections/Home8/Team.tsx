import React from 'react';
import Link from 'next/link';

function Team() {
    return (
        <>
        
        <section className="team-section">
            <div className="anim-icons">
                <img className="image-1" src="images/icons/shape-15.png" alt="" />
            </div>
            <div className="auto-container">
                <div className="sec-title text-center wow fadeInUp">
                    <span className="sub-title">TEAM MEMBER</span>
                    <h2>Expert Team Persons</h2>
                </div>
                <div className="row">
                    <div className="team-block col-lg-3 col-sm-6">
                        <div className="inner-box wow fadeInLeft">
                            <div className="image-box">
                                <div className="inner-box">
                                    <figure className="image overlay-anim"><Link href="/team-details"><img src="images/resource/team-1.jpg" alt="" /></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="/team-details">Michael Dean</Link></h4>
                                    <span className="designation">CEO & Founder</span>
                                    <div className="social-links">
                                        <Link href="/"><i className="fab fa-facebook" /></Link>
                                        <Link href="/"><i className="fab fa-x-twitter" /></Link>
                                        <Link href="/"><i className="fab fa-linkedin" /></Link>
                                        <Link href="/"><i className="fab fa-youtube" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-block col-lg-3 col-sm-6">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="200ms">
                            <div className="image-box">
                                <div className="inner-box">
                                    <figure className="image overlay-anim"><Link href="/team-details"><img src="images/resource/team-2.jpg" alt="" /></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="/team-details">Frank Burton</Link></h4>
                                    <span className="designation">Kitchen Manager</span>
                                    <div className="social-links">
                                        <Link href="/"><i className="fab fa-facebook" /></Link>
                                        <Link href="/"><i className="fab fa-x-twitter" /></Link>
                                        <Link href="/"><i className="fab fa-linkedin" /></Link>
                                        <Link href="/"><i className="fab fa-youtube" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-block col-lg-3 col-sm-6">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="300ms">
                            <div className="image-box">
                                <div className="inner-box">
                                    <figure className="image overlay-anim"><Link href="/team-details"><img src="images/resource/team-3.jpg" alt="" /></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="/team-details">Mya Mullins</Link></h4>
                                    <span className="designation">Hotel Manager</span>
                                    <div className="social-links">
                                        <Link href="/"><i className="fab fa-facebook" /></Link>
                                        <Link href="/"><i className="fab fa-x-twitter" /></Link>
                                        <Link href="/"><i className="fab fa-linkedin" /></Link>
                                        <Link href="/"><i className="fab fa-youtube" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-block col-lg-3 col-sm-6">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="400ms">
                            <div className="image-box">
                                <div className="inner-box">
                                    <figure className="image overlay-anim"><Link href="/team-details"><img src="images/resource/team-4.jpg" alt="" /></Link></figure>
                                </div>
                                <div className="info-box">
                                    <h4 className="name"><Link href="/team-details">Ralph Nguyen</Link></h4>
                                    <span className="designation">Room Service</span>
                                    <div className="social-links">
                                        <Link href="/"><i className="fab fa-facebook" /></Link>
                                        <Link href="/"><i className="fab fa-x-twitter" /></Link>
                                        <Link href="/"><i className="fab fa-linkedin" /></Link>
                                        <Link href="/"><i className="fab fa-youtube" /></Link>
                                    </div>
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
export default Team