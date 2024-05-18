'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Category = ({ id, slug, icon, title }) => {
  const path = usePathname();
  const BASE_ROUTE = 'categories';
  const categoryHref =
    slug === 'new-in' ? '/' : `/${BASE_ROUTE}/${slug}`;

  return (
    <li key={id}>
      <Link
        href={categoryHref}
        className={`hover:bg-neutral-100/60 w-full h-full block py-5 px-4 rounded  ${
          path === categoryHref && 'bg-neutral-100/60'
        }`}
      >
        <span>{icon}</span>
        <span className="mr-2">{title}</span>
      </Link>
    </li>
  );
};

export default Category;
