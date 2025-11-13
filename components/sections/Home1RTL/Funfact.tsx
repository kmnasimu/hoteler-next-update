"use client";
import React from 'react';
import CounterUp from '../../elements/CounterUp';

export default function Funfact() {
    return (
        <>

        <section className="funfact-section">
            <div className="bg bg-image" style={{ backgroundImage: 'url(images/icons/bg-shape2.png)' }}></div>
            <div className="container">
                <div className="fact-counter">
                    <div className="row">
                        <div className="counter-block-one col-lg-3 col-sm-6">
                            <div className="inner-box">
                                <div className="count-box"><span className="count-text"><CounterUp end={20} /></span></div>
                                <div className="counter-text">المشاريع</div>
                            </div>
                        </div>
                        <div className="counter-block-one col-lg-3 col-sm-6">
                            <div className="inner-box">
                                <div className="count-box"><span className="count-text"><CounterUp end={10} /></span></div>
                                <div className="counter-text">الناس</div>
                            </div>
                        </div>
                        <div className="counter-block-one col-lg-3 col-sm-6">
                            <div className="inner-box">
                                <div className="count-box"><span className="count-text"><CounterUp end={40} /></span></div>
                                <div className="counter-text">سنين</div>
                            </div>
                        </div>
                        <div className="counter-block-one col-lg-3 col-sm-6">
                            <div className="inner-box">
                                <div className="count-box"><span className="count-text"><CounterUp end={30} /></span></div>
                                <div className="counter-text">الفائز بالجائزة</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
