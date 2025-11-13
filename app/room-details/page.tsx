import React from 'react';
import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import RoomsDetails from '@/components/sections/RoomsDetails';

export default function RoomsDetailsPage() {
  return (
    <Layout HeaderStyle="nine">
      <PageTitle pageName="Room Details" />
      <RoomsDetails />
    </Layout>
  );
}
