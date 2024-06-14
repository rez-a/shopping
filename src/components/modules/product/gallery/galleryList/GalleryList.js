import React from 'react';
import GalleryItem from './GalleryItem';
import GalleryMore from './GalleryMore';

const GalleryList = ({ gallery }) => {
  return (
    <ul className="flex items-center gap-4 mt-4 justify-center">
      {gallery.slice(0, 3).map((item) => (
        <GalleryItem key={item.id} {...item} />
      ))}
      {gallery.length > 3 && <GalleryMore {...gallery.at(3)} />}
    </ul>
  );
};

export default GalleryList;
