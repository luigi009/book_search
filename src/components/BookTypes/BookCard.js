import React from "react";
import { Link } from 'react-router-dom';

function BookCard({
  list_name,
  newest_published_date,
  oldest_published_date,
  updated,
  id
}) {
  return (
    <>
      <Link
        className="text-2xl cursor-pointer underline text-blue-700"
        to={'/booktypes/' + id}
      >
        {list_name}
      </Link>
      <h1 className="text-md">Update: {updated}</h1>
      <h1 className="text-md lg:col-span-2">
        Última publicação: {newest_published_date}
      </h1>
      <h1 className="text-md">
        Publicação mais antiga: {oldest_published_date}
      </h1>
    </>
  );
}

export default BookCard;
