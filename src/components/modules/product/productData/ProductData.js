import React from 'react';
import PriceSection from './priceBox/PriceSection';
import AddToCartSection from './addToCart/AddToCartSection';
import Description from './descBox/Description';

const ProductData = ({
  title,
  category,
  brand,
  discount,
  price,
  description,
}) => {
  return (
    <ul className="divide-y-2">
      <PriceSection
        {...{ title, category, brand, discount, price }}
      />
      <li className="p-2">
        <div>
          <h3>سایز :</h3>
          <ul className="flex items-center gap-2 mt-2">
            <li>
              <button className="border border-neutral-400 rounded p-2 px-3 text-xs flex justify-center items-center hover:border-neutral-400 transition-all">
                42
              </button>
            </li>
            <li>
              <button className="border rounded p-2 px-3 text-xs flex justify-center items-center hover:border-neutral-400 transition-all">
                43
              </button>
            </li>
            <li>
              <button className="border rounded p-2 px-3 text-xs flex justify-center items-center hover:border-neutral-400 transition-all">
                44
              </button>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>رنگ :</h3>
          <ul className="flex items-center gap-2 mt-2">
            <li className="border border-neutral-400 rounded p-0.5 hover:border-neutral-400 transition-all">
              <button className=" rounded p-4   bg-black"></button>
            </li>
            <li className="border border-white rounded p-0.5 hover:border-neutral-400 transition-all">
              <button className=" rounded p-4  bg-orange-300"></button>
            </li>
            <li className="border border-white rounded p-0.5 hover:border-neutral-400 transition-all">
              <button className=" rounded p-4  bg-green-500"></button>
            </li>
          </ul>
        </div>
      </li>
      <AddToCartSection />

      <Description description={description} />
    </ul>
  );
};

export default ProductData;
