import Link from 'next/link';
import React from 'react';

const Query = ({ title, params, group }) => {
  return (
    <li>
      <Link
        href="/"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 "
      >
        {title}
      </Link>
    </li>
  );
};

export default Query;
