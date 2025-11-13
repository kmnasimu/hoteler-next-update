import React from 'react';
import Layout from '@/components/layout/Layout';
import PageTitle from '@/components/sections/PageTitle';
import ShopSidebar from '@/components/sections/ShopSidebar';

export default function ShopSidebarPage() {
  return (
    <Layout HeaderStyle="nine">
      <PageTitle pageName="Shop Sidebar" />
      <ShopSidebar />
    </Layout>
  );
}
