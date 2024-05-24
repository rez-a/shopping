import React from 'react';
import Category from './Category';
import categories from 'src/categories';

const Categories = () => {
  return (
    <ul>
      {categories.map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </ul>
  );
};

export default Categories;
