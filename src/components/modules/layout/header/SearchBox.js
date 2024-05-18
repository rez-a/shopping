import React from 'react';

const SearchBox = () => {
  return (
    <div className="flex">
      <div className="relative">
        <button className="absolute top-1/2 -translate-y-1/2 hover:bg-neutral-100 p-2 rounded-full">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 ps-10 text-xs text-gray-900 border-0  outline-0"
          placeholder="جستجوی محصول..."
        />
      </div>
    </div>
  );
};

export default SearchBox;
