import React from 'react';
import ProductCard from '@/components/shared/ProductCard';
import BannerCard from '@/components/modules/home/BannerCard';
import WrapperClassProoductCard from '@/components/modules/home/WrapperClassProoductCard';
import WrapperClassBanner from '@/components/modules/home/WrapperClassBanner';

const HomePage = () => {
  return (
    <section className="grid grid-cols-2 gap-4 mb-4">
      <WrapperClassProoductCard>
        <ProductCard />
        <ProductCard />
      </WrapperClassProoductCard>
      <WrapperClassBanner>
        <BannerCard bg="bg-sky-200" />
        <BannerCard bg="bg-purple-300" />
      </WrapperClassBanner>
      <WrapperClassBanner>
        <BannerCard bg="bg-amber-200" />
        <BannerCard bg="bg-fuchsia-200" />
      </WrapperClassBanner>
      <WrapperClassProoductCard>
        <ProductCard />
        <ProductCard />
      </WrapperClassProoductCard>
      <WrapperClassProoductCard>
        <ProductCard />
        <ProductCard />
      </WrapperClassProoductCard>
      <WrapperClassBanner>
        <BannerCard bg="bg-green-300" />
        <BannerCard bg="bg-orange-200" />
      </WrapperClassBanner>
    </section>
  );
};

export default HomePage;
