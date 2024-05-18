import Link from 'next/link';
import React from 'react';
import { cazablanca } from '@/assets/fonts';

const Logo = () => {
  return (
    <Link
      href="/"
      className={`flex items-center space-x-3 rtl:space-x-reverse ${cazablanca.className}`}
    >
      <span className="self-center text-2xl font-semibold whitespace-nowrap">
        شاپینگ
      </span>
    </Link>
  );
};

export default Logo;
