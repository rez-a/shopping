'use client';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

const Title = () => {
  const { categorySlug } = useParams();
  const pathname = usePathname();

  const categories = [
    { id: 1, title: 'جدیدترین', icon: '⚡', slug: 'new-in' },
    { id: 2, title: 'تن پوش', icon: '👚', slug: 'clothing' },
    { id: 3, title: 'کفش', icon: '👠', slug: 'shoes' },
    { id: 4, title: 'اکسسوری', icon: '👜', slug: 'accessories' },
    {
      id: 5,
      title: 'لباس ورزشی',
      icon: '🤸',
      slug: 'activewear',
    },
    { id: 6, title: 'گیفت', icon: '🎁', slug: 'gifts' },
    {
      id: 7,
      title: 'جواهرآلات',
      icon: '💎',
      slug: 'inspiration',
    },
  ];
  const category = categorySlug
    ? categories.find((category) => category.slug === categorySlug)
    : categories.at(0);
  return (
    <h1 className="text-3xl font-bold flex items-center gap-1">
      {pathname.endsWith('categories') ? (
        <p>همه محصولات</p>
      ) : (
        <>
          <p>{category.icon}</p>
          <p>{category.title}</p>
        </>
      )}
    </h1>
  );
};

export default Title;
