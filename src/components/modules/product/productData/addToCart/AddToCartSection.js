import React from 'react';
import SectionWrrap from '../SectionWrrap';
import AddToCartBtn from './AddToCartBtn';
import WishlistBtn from './WishlistBtn';

const AddToCartSection = () => {
  return (
    <SectionWrrap>
      <div className="flex items-center gap-2 ">
        <AddToCartBtn />
        <WishlistBtn />
      </div>
    </SectionWrrap>
  );
};

export default AddToCartSection;
