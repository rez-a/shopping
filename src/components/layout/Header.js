import React from 'react';
import Logo from '@/components/modules/layout/header/Logo';
import SearchBox from '@/components/modules/layout/header/SearchBox';
import CartBox from '@/components/modules/layout/header/CartBox';
import AuthorizeBox from '@/components/modules/layout/header/AuthorizeBox';

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 flex justify-between items-center">
      <div className=" flex flex-wrap items-center gap-8 p-4">
        <Logo />
        <SearchBox />
      </div>
      <div className="flex items-center gap-8 text-xs">
        <CartBox />
        <AuthorizeBox />
      </div>
    </nav>
  );
};

export default Header;
