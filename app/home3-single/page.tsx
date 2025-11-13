import React from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/sections/Home3/Banner';
import About from '@/components/sections/Home3/About';
import Pricing from '@/components/sections/Home3/Pricing';
import Services from '@/components/sections/Home3/Services';
import Video from '@/components/sections/Home3/Video';
import Testimonial from '@/components/sections/Home3/Testimonials';
import Contact from '@/components/sections/Home3/Contact';
import Clients from '@/components/sections/Home3/Clients';
import News from '@/components/sections/Home3/News';

export default function Home3Single() {
  return (
    <Layout HeaderStyle="three" menuType="single">
      <Banner />
      <About />
      <Pricing />
      <Services />
      <Video />
      <Testimonial />
      <Contact />
      <Clients />
      <News />
    </Layout>
  );
}
