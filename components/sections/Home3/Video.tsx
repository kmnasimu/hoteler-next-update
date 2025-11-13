'use client';

"use client";

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'
import Link from 'next/link';

function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        <section className="video-section-four">
            <div className="bg bg-image" style={{backgroundImage: 'url(images/background/video-bg3.jpg)'}}></div>
            <div className="auto-container">
                <div className="outer-box">
                    <div className="sec-title light wow fadeInUp">
                        <h2>Discover Your Paradise <br />Where You Are</h2>
                    </div>
                    <div className="btn-box">
                        <a onClick={() => setOpen(true)} className="play-now-two" data-fancybox="gallery" data-caption="">
                            <i className="fa-solid fa-play" />
                            <span className="ripple"></span>
                        </a>
                    </div>
                    <div className="info-text">
                        <div className="inner-info">
                            <div className="text">Sed imperdiet dignissim odio dignissim bibendum. Praesent porttitor tristique velit. efficitur, a pulvinar sem hasellus.</div>
                            <Link href="/contact" className="link">Get a Free Consultation <i className="icon fas fa-arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />

        </>
    )
}
export default Video

