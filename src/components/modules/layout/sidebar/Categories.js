import React from 'react';
import Category from './Category';

const Categories = () => {
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
  return (
    <ul>
      {categories.map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </ul>
  );
};

export default Categories;
