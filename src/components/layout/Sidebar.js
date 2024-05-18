import React from 'react';
import Categories from '@/components/modules/layout/sidebar/Categories';

const Sidebar = () => {
  return (
    <aside className="col-span-1">
      <h2 className="font-bold text-lg mb-6">دسته بندی</h2>
      <Categories />
    </aside>
  );
};

export default Sidebar;
