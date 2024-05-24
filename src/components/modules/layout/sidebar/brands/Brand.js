import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Brand = ({ categoryIcon, brandTitle, brandSlug }) => {
  const path = usePathname();
  const brandHref = `${path}/${brandSlug}`;
  const brandActive = path === brandHref;
  return (
    <li className="pr-8 ">
      <Link
        href={brandHref}
        className={`hover:bg-neutral-100/60 w-full h-full py-2.5 px-2 text-xs rounded flex items-center justify-between group ${
          brandActive ? 'bg-neutral-100/60' : 'bg-white'
        }`}
      >
        <p>
          <span>{categoryIcon}</span>
          <span className="mr-2">{brandTitle}</span>
        </p>
        <svg
          className={`w-4 h-4 text-gray-300 dark:text-white opacity-0 group-hover:opacity-100 transition ${
            brandActive ? 'opacity-100' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
      </Link>
    </li>
  );
};

export default Brand;
