'use client';
import React from 'react';
import Query from './Query';
import { usePathname } from 'next/navigation';

const Queries = () => {
  const pathname = usePathname();
  const queries = [
    {
      id: 1,
      title: 'جدیدترین',
      params: 'newest',
      group: 'time',
    },
    {
      id: 2,
      title: 'قدیمی ترین',
      params: 'oldest',
      group: 'time',
    },
    {
      id: 3,
      title: 'گران ترین',
      params: 'expensive',
      group: 'price',
    },
    {
      id: 4,
      title: 'ارزان ترین',
      params: 'cheapest',
      group: 'price',
    },
  ];
  return (
    <div className="flex items-center">
      {pathname !== '/' && (
        <ul className="flex items-center gap-1">
          {queries.map((query) => (
            <Query key={query.id} {...query} />
          ))}
        </ul>
      )}
      <div className="text-white bg-gray-800 font-medium rounded-lg text-xs px-5 py-2.5 mr-1 border border-gray-800">
        <span className="ml-1">محصولات موجود :</span>
        <span>34</span>
      </div>
    </div>
  );
};

export default Queries;
