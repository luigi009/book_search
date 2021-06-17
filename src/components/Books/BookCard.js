import React from "react";

function BookCard({
  title,
  description,
  author,
  price,
  publisher,
  rank,
  link,
  image,
}) {
  return (
    <>
      <div className="div-img h-80">
        <img className="p-2" src={image} alt={title} width="200" height="200" />
      </div>

      <div>
        <div className="grid-cols-2 grid-rows-2">
          <h1 className="text-lg font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
            {title}
          </h1>
          <h1 className="flex flex-row font-normal text-gray-600 whitespace-nowrap overflow-hidden overflow-ellipsis">
            {" "}
            by {author}           
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="#5062f0"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          </h1>
        </div>

        <div className="mb-3 mt-3">
          <h1 className="text-md whitespace-nowrap overflow-hidden overflow-ellipsis">
            Description: {description}
          </h1>
        </div>

        <div className="mb-3 mt-3">
          <h1 className="text-md whitespace-nowrap overflow-hidden overflow-ellipsis">Publisher: {publisher}</h1>
        </div>

        <div className="mb-3 mt-3">
          <h1 className="text-md">Rank: {rank}</h1>
        </div>

        <div className="flex items-end">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-md rounded-full p-3 text-white bg-blue-900"
          >
            Compre por R${price}
          </a>
        </div>
      </div>
    </>
  );
}

export default BookCard;
