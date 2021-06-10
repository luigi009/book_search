import React, { useState } from "react";

export default function BookNav({ onSearch }) {
  const [search, setSearch] = useState("");

  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };

  return (
    <>
      <div className="grid grid-flow-col grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-3 bg-blue-600">
        <div>
          <h1 className="text-3xl text-white font-bold p-4">Bloom Books</h1>
        </div>
        <div className="p-3 col-span-2 lg:col-span-1">
          <form className="flex flex-row items-center rounded-full bg-white p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600 mr-2 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              value={search}
              onChange={(e) => onInputChange(e.target.value)}
              type="text"
              id="searchInput"
              className="w-full"
              placeholder="Pesquise aqui..."
            />
          </form>
        </div>
        <div className="flex justify-end sm:mr-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="#fff"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>
    </>
  );
}
