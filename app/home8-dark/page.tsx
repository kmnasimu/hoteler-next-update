import React from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/sections/Home4/Banner';
import CheckoutForm from '@/components/sections/Home4/CheckoutForm';
import Services from '@/components/sections/Home1/Services';
import About from '@/components/sections/Home1/About';
import Room from '@/components/sections/Home1/Room';
import Testimonial from '@/components/sections/Home1/Testimonials';
import About2 from '@/components/sections/Home8/About2';
import Pricing from '@/components/sections/Home8/Pricing';
import Video from '@/components/sections/Home1/Video';
import Team from '@/components/sections/Home8/Team';
import Funfact from '@/components/sections/Home1/Funfact';
import Contact from '@/components/sections/Home1/Contact';
import News from '@/components/sections/Home1/News';

export default function Home8Dark() {
  return (
    <Layout HeaderStyle="seven" darkMode="1">
      <Banner />
      <CheckoutForm />
      <Services />
      <About />
      <Room />
      <Testimonial />
      <About2 />
      <Pricing />
      <Video />
      <Team />
      <Funfact />
      <Contact />
      <News />
    </Layout>
  );
}
