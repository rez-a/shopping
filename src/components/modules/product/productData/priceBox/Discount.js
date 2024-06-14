import React from 'react';

const Discount = ({ price, discount }) => {
  return (
    <>
      <p className="space-x-2 space-x-reverse mt-2 inline">
        <span className="font-bold text-xl">
          {Number(price - (price * discount) / 100)}
        </span>
        <span className="text-xs text-neutral-400">تومان</span>
      </p>
      <span className="text-xs font-light text-green-600 mr-2">{`( ${
        (price * discount) / 100
      } تومان سود خرید شماست )`}</span>
    </>
  );
};

export default Discount;
