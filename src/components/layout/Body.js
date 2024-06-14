import React from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

const Body = ({ children }) => {
  return (
    <body className="max-w-screen-xl mx-auto">
      <Header />
      <div className="grid grid-cols-5 gap-8 mt-8 relative">
        <Sidebar />
        <Main>{children}</Main>
      </div>
    </body>
  );
};

export default Body;
