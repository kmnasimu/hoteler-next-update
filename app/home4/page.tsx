import React from 'react';
import Layout from '@/components/layout/Layout';
import Banner from '@/components/sections/Home4/Banner';
import CheckoutForm from '@/components/sections/Home4/CheckoutForm';
import About from '@/components/sections/Home4/About';
import Marquee from '@/components/sections/Home4/Marquee';
import Services from '@/components/sections/Home4/Services';
import Pricing from '@/components/sections/Home3/Pricing';
import Services2 from '@/components/sections/Home4/Services2';
import Testimonial from '@/components/sections/Home4/Testimonials';
import Contact from '@/components/sections/Home1/Contact';
import News from '@/components/sections/Home1/News';

export default function Home4() {
  return (
    <Layout HeaderStyle="four">
      <Banner />
      <CheckoutForm />
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
