import React from 'react';
import BreadcrumbIcon from './BreadcrumbIcon';
import Link from 'next/link';

const BreadcrumbItem = ({ slug, path }) => {
  return (
    <li>
      <div className="flex items-center">
        <BreadcrumbIcon />
        <Link
          href="#"
          className="ms-1 text-xs font-medium text-neutral-400 hover:text-neutral-600  "
        >
          تست
        </Link>
      </div>
    </li>
  );
};

export default BreadcrumbItem;
