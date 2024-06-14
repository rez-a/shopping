'use client';
import React from 'react';
import Title from '@/components/modules/layout/navbar/Title';
import Queries from '@/components/modules/layout/navbar/queries/Queries';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const path = usePathname();
  const pagesWithoutNavbars = [
    { path: '/cart', title: 'سبد خرید' },
    { path: '/checkout', title: 'ثبت سفارش' },
  ];
  const page = pagesWithoutNavbars.find((page) => page.path === path);

  return (
    <nav className="flex items-center justify-between mb-8">
      <Title page={page} />
      {!page && <Queries />}
    </nav>
  );
};

export default Navbar;
