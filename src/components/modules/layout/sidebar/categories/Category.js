'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Brands from '@/components/modules/layout/sidebar/brands/Brands';

const Category = ({ id, slug, icon, title, brands }) => {
  const path = usePathname();
  const categoryHref = slug === 'new-in' ? '/' : `/${slug}`;
  const categoryActive = path.includes(slug);

  return (
    <li key={id}>
      <Link
        href={categoryHref}
        className={`hover:bg-neutral-100/60 w-full h-full block py-5 px-4 rounded  ${
          categoryActive && 'bg-neutral-100/60'
        }`}
      >
        <span>{icon}</span>
        <span className="mr-2">{title}</span>
      </Link>
      {!!brands.length && categoryActive && (
        <Brands brands={brands} category={{ icon, slug }} />
      )}
    </li>
  );
};

export default Category;
