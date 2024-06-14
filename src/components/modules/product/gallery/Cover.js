import Image from 'next/image';
import React from 'react';

const Cover = ({ alt, pic }) => {
  return (
    <div className="flex justify-center max-h-96">
      <Image
        alt={alt}
        src={pic}
        width="auto"
        height="auto"
        priority
      />
    </div>
  );
};

export default Cover;
