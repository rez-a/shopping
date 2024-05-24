import React from 'react';
import ProductCard from '@/components/shared/ProductCard';

const BrandsProductPage = () => {
  return [...Array(8)].map((product, index) => (
    <ProductCard key={index} />
  ));
};

export default BrandsProductPage;
