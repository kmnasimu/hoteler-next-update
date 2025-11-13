'use client';

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { FadeInUp } from '@/lib/animations';

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="video-section-three">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-5">
              <FadeInUp className="sec-title">
                <span className="sub-title style-three">Extraordinary HOTEL</span>
                <h2>Your Gateway to Unforgettable Stays</h2>
              </FadeInUp>
            </div>
            <div className="col-lg-4 offset-lg-3">
              <div className="btn-box">
                <a
                  onClick={() => setOpen(true)}
                  className="play-now-two"
                  style={{ cursor: 'pointer' }}
                >
                  <i className="icon fa-solid fa-play"></i>
                  <span className="ripple"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Fvae8nxzVz4"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

