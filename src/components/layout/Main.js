'use client';

import React from 'react';
import Navbar from './Navbar';
import useCheckProductPage from '@/hooks/useCheckProductPage';
import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb';

const Main = ({ children }) => {
  const isProductPage = useCheckProductPage();

  return (
    <main className={'col-span-4'}>
      {!isProductPage ? <Navbar /> : <Breadcrumb />}
      {children}
    </main>
  );
};

export default Main;
