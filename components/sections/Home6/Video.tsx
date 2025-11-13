'use client';

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'

function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        
        <section className="video-section-two">
            <div className="bg bg-image" style={{backgroundImage: 'url(images/background/video-bg2.jpg)'}}></div>
            <div className="auto-container">
                <div className="sec-title text-center light wow fadeInUp">
                    <span className="sub-title">Promotional Video</span>
                    <h2>Your Journey Begins with Our Booking</h2>
                    <div className="btn-box">
                        <a onClick={() => setOpen(true)} className="play-now-two" data-fancybox="gallery" data-caption="">
                            <i className="fa-solid fa-play" />
                            <span className="ripple"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />

        </>
    )
}
export default Video
