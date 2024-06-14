import React from 'react';
import Cover from './Cover';
import GalleryList from './galleryList/GalleryList';

const GalleryBox = ({ gallery }) => {
  return (
    <>
      <Cover {...gallery.at(1)} />
      <GalleryList gallery={gallery} />
    </>
  );
};

export default GalleryBox;
