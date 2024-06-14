import React from 'react';

const Price = ({ price, discount }) => {
  return (
    <p
      className={`space-x-2 space-x-reverse w-fit mt-6 ${
        !!discount
          ? "text-neutral-400 relative before:absolute before:-right-1 before:top-1/2 before:-translate-y-1/2 before:content-[''] before:w-[110%] before:h-0.5 before:bg-neutral-400 "
          : ''
      }`}
    >
      <span className="font-bold">{Number(price)}</span>
      <span className="text-xs text-neutral-400">تومان</span>
    </p>
  );
};

export default Price;
