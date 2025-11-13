import React from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/sections/Home7/Banner';
import About from '@/components/sections/Home7/About';
import Marquee from '@/components/sections/Home4/Marquee';
import Services from '@/components/sections/Home7/Services';
import Pricing from '@/components/sections/Home3/Pricing';
import Services2 from '@/components/sections/Home4/Services2';
import Testimonial from '@/components/sections/Home4/Testimonials';
import Contact from '@/components/sections/Home1/Contact';
import News from '@/components/sections/Home1/News';

export default function Home7Dark() {
  return (
    <Layout HeaderStyle="five" darkMode="1">
      <Banner />
      <About />
      <Marquee />
      <Services />
      <Pricing />
      <Services2 />
      <Testimonial />
      <Contact />
      <News />
    </Layout>
  );
}
