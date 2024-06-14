import React from 'react';
import productPic from '../../../public/images/product.png';

import GalleryBox from '@/components/modules/product/gallery/GalleryBox';
import ProductData from '@/components/modules/product/productData/ProductData';

const ProductPage = () => {
  const product = {
    id: 1,
    title: 'کت چرم هوگو باس',
    category: {
      id: 2,
      title: 'تن پوش',
      icon: '👚',
      slug: 'clothing',
      brands: [
        { id: 1, brandTitle: 'آدیداس', brandSlug: 'adidas' },
        { id: 2, brandTitle: 'نایک', brandSlug: 'nike' },
        { id: 3, brandTitle: 'پوما', brandSlug: 'puma' },
      ],
    },
    types: [
      {
        id: 1,
        typeTitle: 'رنگ',
        typeData: ['#eab308', '#84cc16', '#3b82f6', '#000000'],
      },
      {
        id: 2,
        typeTitle: 'سایز',
        typeData: ['42', '43', '44', '45'],
      },
    ],
    brand: { id: 2, brandTitle: 'نایک', brandSlug: 'nike' },
    productSlug: 'hugo-boss-leather-jacket',
    price: 300000,
    discount: 30,
    qty: 5,
    cover: productPic,
    gallery: [
      { id: 2, pic: productPic, alt: 'test' },
      { id: 3, pic: productPic, alt: 'test' },
      { id: 1, pic: productPic, alt: 'test' },
      { id: 4, pic: productPic, alt: 'test' },
    ],
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
  };
  return (
    <>
      <div className="col-span-2">
        <GalleryBox gallery={product.gallery} />
      </div>
      <aside className="col-span-2">
        <ProductData {...product} />
      </aside>
    </>
  );
};

export default ProductPage;
