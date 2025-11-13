'use client';

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'

function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        <section className="video-section">
            <div className="bg bg-image" data-speed="0.5" data-parallax="scroll" style={{ backgroundImage: 'url(images/background/video-bg.jpg)' }}></div>
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="btn-column col-lg-12">
                        <div className="inner-column text-center">
                            <a onClick={() => setOpen(true)} className="play-now-two" data-fancybox="gallery" data-caption="">
                                <i className="icon fa-solid fa-play"></i>
                                <span className="ripple"></span>
                            </a>
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