import React from 'react';
import bannerPic from '../../../../public/images/banner.png';
import Link from 'next/link';
import Image from 'next/image';

const BannerCard = ({ bg }) => {
  return (
    <article
      className={`col-span-2 row-span-1 rounded-lg p-4 relative group shadow-none hover:shadow-lg transition duration-300 ${bg}`}
    >
      <div className="flex justify-around items-center">
        <div className="group-hover:scale-110 transition duration-300">
          <h2 className="text-xl font-bold mb-2">سری جدید جردن</h2>
          <p className="text-xs font-light">بهترین لباس روزانه</p>
        </div>
        <div className="w-1/2 h-full">
          <Image
            src={bannerPic}
            width="auto"
            height="auto"
            alt="product"
            priority
            className="group-hover:scale-110 transition duration-300"
          />
        </div>

        <Link
          href="/"
          className="absolute w-full h-full left-0 top-0"
        />
      </div>
    </article>
  );
};

export default BannerCard;
