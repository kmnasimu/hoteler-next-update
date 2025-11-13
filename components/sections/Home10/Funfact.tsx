import React from 'react';
import CounterUp from '../../elements/CounterUp';

function Funfact() {
    return (
        <> 

        <section className="funfact-section-three pb-0">
            <div className="outer-box">
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row">
                            <div className="counter-block-one col-lg-3 col-sm-6">
                                <div className="inner-box">
                                    <div className="count-box"><span className="count-text"><CounterUp end={20} /></span></div>
                                    <div className="counter-text">Years Of <br />Experience</div>
                                </div>
                            </div>
                            <div className="counter-block-one col-lg-3 col-sm-6">
                                <div className="inner-box">
                                    <div className="count-box"><span className="count-text"><CounterUp end={10} /></span></div>
                                    <div className="counter-text">Online <br />Booking</div>
                                </div>
                            </div>
                            <div className="counter-block-one col-lg-3 col-sm-6">
                                <div className="inner-box">
                                    <div className="count-box"><span className="count-text"><CounterUp end={40} /></span></div>
                                    <div className="counter-text">Experience <br />Hoteler</div>
                                </div>
                            </div>
                            <div className="counter-block-one col-lg-3 col-sm-6">
                                <div className="inner-box">
                                    <div className="count-box"><span className="count-text"><CounterUp end={30} /></span></div>
                                    <div className="counter-text">Best Service <br />Award</div>
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
export default Funfact