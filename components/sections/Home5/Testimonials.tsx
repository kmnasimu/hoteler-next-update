import React from 'react';

interface TestimonialProps {
  className?: string;
}

function Testimonial({ className = '' }: TestimonialProps) {
    return (
        <>
        <section className={`testimonial-section-five ${className}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title text-center">
                            <span className="sub-title">Our Customer Feedback</span>
                            <h2>What Client's Say?</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="testimonial-block-five col-lg-4 col-sm-6">
                        <div className="inner-box">
                            <div className="content-box">
                                <span className="icon fa fa-quote-right"></span>
                                <div className="text">Working with Architecture  was an others experience. Their team demonstrated to exceptional professionalism and timely creativity throughout our project</div>
                            </div>
                            <div className="info-box">
                                <figure className="thumb"><img src="images/resource/testi2-thumb1.png" alt="" /></figure>
                                <div>
                                    <span className="designation">CO Founder</span>
                                    <div className="name">Brooklyn Simmons</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-block-five col-lg-4 col-sm-6">
                        <div className="inner-box">
                            <div className="content-box">
                                <span className="icon fa fa-quote-right"></span>
                                <div className="text">Working with Architecture  was an others experience. Their team demonstrated to exceptional professionalism and timely creativity throughout our project</div>
                            </div>
                            <div className="info-box">
                                <figure className="thumb"><img src="images/resource/testi2-thumb2.png" alt="" /></figure>
                                <div>
                                    <span className="designation">Engineer</span>
                                    <div className="name">Voranee Peeyarat</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-block-five col-lg-4 col-sm-6">
                        <div className="inner-box">
                            <div className="content-box">
                                <span className="icon fa fa-quote-right"></span>
                                <div className="text">Working with Architecture  was an others experience. Their team demonstrated to exceptional professionalism and timely creativity throughout our project</div>
                            </div>
                            <div className="info-box">
                                <figure className="thumb"><img src="images/resource/testi2-thumb1.png" alt="" /></figure>
                                <div>
                                    <span className="designation">Architect</span>
                                    <div className="name">Esther Howard</div>
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
export default Testimonial