import React from 'react';
import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import About from '@/components/sections/Home4/About';
import Marquee from '@/components/sections/Home4/Marquee';
import Features2 from '@/components/sections/Home5/Features2';
import Funfact from '@/components/sections/Home5/Funfact';
import Testimonial from '@/components/sections/Home5/Testimonials';

export default function AboutPage() {
  return (
    <Layout HeaderStyle="nine">
      <PageTitle pageName="About Us" />
      <About/>
      <Marquee/>
      <Features2 className="pb-0"/>
      <Funfact className='pt-120 pb-120'/>
      <Testimonial className="pt-0"/>
    </Layout>
  );
}
