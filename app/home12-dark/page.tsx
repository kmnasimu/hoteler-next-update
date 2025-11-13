import React from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/sections/Home12/Banner';
import About from '@/components/sections/Home12/About';
import Pricing from '@/components/sections/Home3/Pricing';
import Services from '@/components/sections/Home3/Services';
import Clients from '@/components/sections/Home12/Clients';
import Video from '@/components/sections/Home3/Video';
import Testimonial from '@/components/sections/Home3/Testimonials';
import Contact from '@/components/sections/Home3/Contact';
import News from '@/components/sections/Home1/News';

export default function Home12Dark() {
  return (
    <Layout HeaderStyle="ten" darkMode="1">
      <Banner />
      <About />
      <Pricing />
      <Services />
      <Clients />
      <Video />
      <Testimonial />
      <Contact />
      <News />
    </Layout>
  );
}
