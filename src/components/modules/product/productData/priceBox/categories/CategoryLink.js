import Link from 'next/link';
import React from 'react';

const CategoryLink = ({ title }) => {
  return <Link href="/">{title}</Link>;
};

export default CategoryLink;
