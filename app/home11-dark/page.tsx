import React from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/sections/Home11/Banner';
import CheckoutForm from '@/components/sections/Home11/CheckoutForm';
import Features from '@/components/sections/Home11/Features';
import Features2 from '@/components/sections/Home11/Features2';
import Funfact from '@/components/sections/Home1/Funfact';
import Features3 from '@/components/sections/Home2/Features2';
import Video from '@/components/sections/Home2/Video';
import Room from '@/components/sections/Home2/Room';
import Marquee from '@/components/sections/Home2/Marquee';
import About from '@/components/sections/Home2/About';
import About2 from '@/components/sections/Home2/About2';
import Pricing from '@/components/sections/Home2/Pricing';
import Contact from '@/components/sections/Home2/Contact';
import News from '@/components/sections/Home1/News';

export default function Home11Dark() {
  return (
    <Layout HeaderStyle="two" darkMode="1">
      <Banner />
      <CheckoutForm />
      <Features />
      <Features2 />
      <Funfact />
      <Features3 />
      <Video />
      <Room />
      <Marquee />
      <About />
      <About2 />
      <Pricing />
      <Contact />
      <News />
    </Layout>
  );
}
