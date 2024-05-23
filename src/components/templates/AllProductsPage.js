import React from 'react';
import ProductCard from '@/components/shared/ProductCard';

const AllProductsPage = () => {
  return [...Array(12)].map((product, index) => (
    <ProductCard key={index} />
  ));
};

export default AllProductsPage;
