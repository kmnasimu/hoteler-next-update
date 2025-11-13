import React from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/sections/Home2/Banner';
import CheckoutForm from '@/components/sections/Home1/CheckoutForm';
import Features from '@/components/sections/Home2/Features';
import Funfact from '@/components/sections/Home1/Funfact';
import Features2 from '@/components/sections/Home2/Features2';
import Video from '@/components/sections/Home2/Video';
import Room from '@/components/sections/Home2/Room';
import Marquee from '@/components/sections/Home2/Marquee';
import About from '@/components/sections/Home2/About';
import About2 from '@/components/sections/Home2/About2';
import Pricing from '@/components/sections/Home2/Pricing';
import Contact from '@/components/sections/Home2/Contact';
import News from '@/components/sections/Home1/News';

export default function Home2Single() {
  return (
    <Layout HeaderStyle="two" menuType="single">
      <Banner />
      <CheckoutForm />
      <Features />
      <Funfact />
      <Features2 />
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
