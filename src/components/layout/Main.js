'use client';

import React from 'react';
import Navbar from './Navbar';
import useCheckShouldBeNavbar from '@/hooks/useCheckShouldBeNavbar';
import Breadcrumb from '@/components/modules/breadcrumb/Breadcrumb';

const Main = ({ children }) => {
  const isShouldBe = useCheckShouldBeNavbar();

  return (
    <main className={'col-span-4'}>
      {!isShouldBe ? <Navbar /> : <Breadcrumb />}
      {children}
    </main>
  );
};

export default Main;
