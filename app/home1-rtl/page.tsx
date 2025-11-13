import React from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/sections/Home1RTL/Banner';
import CheckoutForm from '@/components/sections/Home1RTL/CheckoutForm';
import Services from '@/components/sections/Home1RTL/Services';
import About from '@/components/sections/Home1RTL/About';
import Room from '@/components/sections/Home1RTL/Room';
import Testimonials from '@/components/sections/Home1RTL/Testimonials';
import Pricing from '@/components/sections/Home1RTL/Pricing';
import Video from '@/components/sections/Home1RTL/Video';
import Team from '@/components/sections/Home1RTL/Team';
import Funfact from '@/components/sections/Home1RTL/Funfact';
import Contact from '@/components/sections/Home1RTL/Contact';
import News from '@/components/sections/Home1RTL/News';

export default function Home1RTL() {
  return (
    <Layout rtl={true} HeaderStyle="rtl1" FooterStyle="footerRTL">
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
