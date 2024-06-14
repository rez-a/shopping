import React from 'react';
import productPic from '../../../public/images/product.png';
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = () => {
  return (
    <article className="bg-neutral-100 rounded-lg p-4 relative shadow-none hover:shadow-lg transition duration-300 group">
      <div className=" h-52 overflow-hidden">
        <Image
          src={productPic}
          width="auto"
          height="auto"
          alt="product"
          priority
          className="group-hover:scale-110 transition duration-300"
        />
      </div>
      <h2 className="font-bold text-center mt-4">کت چرم هوگو باس</h2>
      <div className="text-sm text-center mt-4">
        <p className="text-neutral-400 line-through text-xs">
          <span>{Number(300000).toLocaleString()}</span>
          <span className="mr-1">تومان</span>
        </p>
        <p className="text-base">
          <span>{Number(200000).toLocaleString()}</span>
          <span className="text-xs mr-1">تومان</span>
        </p>
      </div>
      <Link
        href="/clothing/nike/hugo-boss-leather-jacket"
        className="absolute w-full h-full left-0 top-0"
      />
      <p className="absolute right-4 top-4 bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-red-400">
        <span>{30}</span>
        <span>%</span>
      </p>
    </article>
  );
};

export default ProductCard;
