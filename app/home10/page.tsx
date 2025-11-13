import React from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/sections/Home10/Banner';
import About from '@/components/sections/Home10/About';
import Marquee from '@/components/sections/Home10/Marquee';
import Services from '@/components/sections/Home6/Services';
import Funfact from '@/components/sections/Home6/Funfact';
import Pricing from '@/components/sections/Home6/Pricing';
import Video from '@/components/sections/Home6/Video';
import Cta from '@/components/sections/Home6/Cta';
import Pricing2 from '@/components/sections/Home6/Pricing2';
import Testimonials from '@/components/sections/Home6/Testimonials';
import News from '@/components/sections/Home1/News';

export default function Home10() {
  return (
    <Layout HeaderStyle="nine">
      <Banner />
      <About />
      <Marquee />
      <Services />
      <Funfact />
      <Pricing />
      <Video />
      <Cta />
      <Pricing2 />
      <Testimonials />
      <News />
    </Layout>
  );
}
