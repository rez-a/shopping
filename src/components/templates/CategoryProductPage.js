import React from 'react';
import ProductCard from '@/components/shared/ProductCard';

const CategoryProductPage = () => {
  return [...Array(6)].map((product, index) => (
    <ProductCard key={index} />
  ));
};

export default CategoryProductPage;
