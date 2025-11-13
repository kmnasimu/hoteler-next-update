import React from 'react';
import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import Features2 from '@/components/sections/Home5/Features2';

export default function RoomsSuitePage() {
  return (
    <Layout HeaderStyle="nine">
      <PageTitle pageName="Rooms and Suits" />
      <Features2 className="pt-120 pb-120"/>
    </Layout>
  );
}
