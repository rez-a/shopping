import React from 'react';
import SectionWrrap from '../SectionWrrap';
import Title from './Title';
import Categories from './categories/Categories';
import Discount from './Discount';
import Price from './Price';

const PriceSection = ({
  title,
  category,
  brand,
  discount,
  price,
}) => {
  return (
    <SectionWrrap>
      <Title title={title} />
      <div className="text-xs text-sky-500 flex items-center gap-2 mt-3">
        <Categories {...{ category, brand }} />
      </div>
      <div>
        <Price {...{ price, discount }} />
        {!!discount && <Discount {...{ price, discount }} />}
      </div>
    </SectionWrrap>
  );
};

export default PriceSection;
