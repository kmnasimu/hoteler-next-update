import React from 'react';
import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import Room from '@/components/sections/Home2/Room';

export default function RoomsPage() {
  return (
    <Layout HeaderStyle="nine">
      <PageTitle pageName="Rooms" />
      <Room />
    </Layout>
  );
}
