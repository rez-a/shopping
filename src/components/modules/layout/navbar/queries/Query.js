'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

const Query = ({ title, params, group }) => {
  const pathname = usePathname();
  const query = useSearchParams().get(group);

  return (
    <li>
      <Link
        href={{ pathname, query: { [group]: params } }}
        className={`text-gray-900  border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 ${
          query === params ? 'bg-gray-100' : 'bg-white'
        }`}
      >
        {title}
      </Link>
    </li>
  );
};

export default Query;
