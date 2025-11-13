import React from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/sections/Home9/Banner';
import Features from '@/components/sections/Home5/Features';
import About from '@/components/sections/Home5/About';
import Video from '@/components/sections/Home1/Video';
import Gallery from '@/components/sections/Home5/Gallery';
import Marquee from '@/components/sections/Home5/Marquee';
import Features2 from '@/components/sections/Home5/Features2';
import Funfact from '@/components/sections/Home5/Funfact';
import Pricing from '@/components/sections/Home5/Pricing';
import Testimonial from '@/components/sections/Home5/Testimonials';
import Contact from '@/components/sections/Home1/Contact';
import News from '@/components/sections/Home1/News';

export default function Home9Dark() {
  return (
    <Layout HeaderStyle="eight" darkMode="1">
      <Banner />
      <Features />
      <About />
      <Video />
      <Gallery />
      <Marquee />
      <Features2 />
      <Funfact />
      <Pricing />
      <Testimonial />
      <Contact />
      <News />
    </Layout>
  );
}
