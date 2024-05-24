import React from 'react';
import Brand from './Brand';

const Brands = ({ brands, category }) => {
  return (
    <ul className="max-h-40 overflow-y-scroll secondary-scrollbar">
      {brands.map((brand) => (
        <Brand key={brand.id} {...brand} category={category} />
      ))}
    </ul>
  );
};

export default Brands;
