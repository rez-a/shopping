import React from 'react';
import CategoryLink from './CategoryLink';

const Categories = ({ category, brand }) => {
  return (
    <>
      <CategoryLink {...{ title: category.title }} />
      {!!brand && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
            className="text-neutral-500"
          >
            <path d="M2 11H4V13H2V11ZM6 11H18V13H6V11ZM20 11H22V13H20V11Z"></path>
          </svg>
          <CategoryLink {...{ title: brand.brandTitle }} />
        </>
      )}
    </>
  );
};

export default Categories;
