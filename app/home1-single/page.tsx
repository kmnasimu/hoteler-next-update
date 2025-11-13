import React from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/sections/Home1/Banner';
import CheckoutForm from '@/components/sections/Home1/CheckoutForm';
import Services from '@/components/sections/Home1/Services';
import About from '@/components/sections/Home1/About';
import Room from '@/components/sections/Home1/Room';
import Testimonials from '@/components/sections/Home1/Testimonials';
import Pricing from '@/components/sections/Home1/Pricing';
import Video from '@/components/sections/Home1/Video';
import Team from '@/components/sections/Home1/Team';
import Funfact from '@/components/sections/Home1/Funfact';
import Contact from '@/components/sections/Home1/Contact';
import News from '@/components/sections/Home1/News';

export default function Home1Single() {
  return (
    <Layout menuType="single">
      <Banner />
      <CheckoutForm />
      <Services />
      <About />
      <Room />
      <Testimonials />
      <Pricing />
      <Video />
      <Team />
      <Funfact />
      <Contact />
      <News />
    </Layout>
  );
}
