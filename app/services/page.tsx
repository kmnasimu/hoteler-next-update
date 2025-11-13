import React from 'react';
import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import ServiceGrid from '@/components/sections/ServiceGrid';

export default function ServicesPage() {
  return (
    <Layout HeaderStyle="nine">
      <PageTitle pageName="Service Grid" />
      <ServiceGrid />
    </Layout>
  );
}
