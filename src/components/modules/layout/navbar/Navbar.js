import React from 'react';
import Title from './Title';
import Queries from './queries/Queries';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-8">
      <Title />
      <Queries />
    </nav>
  );
};

export default Navbar;
