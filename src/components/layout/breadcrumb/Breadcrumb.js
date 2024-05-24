'use client';
import Link from 'next/link';
import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import { usePathname } from 'next/navigation';
import slugify from '@/utils/slugify';
import categories from 'src/categories';

const Breadcrumb = () => {
  const path = usePathname();
  const allPaths = slugify(path);
  console.log(allPaths);

  return (
    <nav className="flex mb-4">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-medium text-neutral-400 hover:text-neutral-600 "
          >
            <svg
              className="w-3 h-3 me-2.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            صفحه اصلی
          </Link>
        </li>
        {!!allPaths.length &&
          allPaths.map((path, i) => (
            <BreadcrumbItem key={i} {...path} />
          ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
