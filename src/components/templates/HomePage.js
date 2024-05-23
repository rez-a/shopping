import React from 'react';
import ProductCard from '@/components/shared/ProductCard';
import BannerCard from '@/components/modules/home/BannerCard';

const HomePage = () => {
  return (
    <>
      <ProductCard />
      <ProductCard />
      <BannerCard bg="bg-sky-200" />
      <BannerCard bg="bg-purple-300" />
      <BannerCard bg="bg-amber-200" />
      <ProductCard />
      <ProductCard />
      <BannerCard bg="bg-fuchsia-200" />
      <ProductCard />
      <ProductCard />
      <BannerCard bg="bg-green-300" />
      <BannerCard bg="bg-orange-200" />
    </>
  );
};

export default HomePage;
