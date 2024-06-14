import React from 'react';

const CategoryLayout = ({ children }) => {
  return (
    <section className="grid grid-cols-4 gap-4 mb-4">
      {children}
    </section>
  );
};

export default CategoryLayout;
