import React from 'react';
import Brand from './Brand';

const Brands = ({ brands, categoryIcon }) => {
  return (
    <ul>
      {brands.map((brand) => (
        <Brand {...brand} categoryIcon={categoryIcon} />
      ))}
    </ul>
  );
};

export default Brands;
