import Image from 'next/image';
import React from 'react';

const GalleryItem = ({ alt, pic }) => {
  return (
    <li className="w-20 h-20 overflow-hidden">
      <button className="w-full h-full border rounded p-4 flex justify-center items-center hover:border-neutral-400 transition-all">
        <Image
          alt={alt}
          src={pic}
          width="auto"
          height="auto"
          className="object-cover"
          priority
        />
      </button>
    </li>
  );
};

export default GalleryItem;
