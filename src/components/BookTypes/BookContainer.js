import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import BookPagination from "./BookPagination";
import BookNav from "./BookNav";
import BookPagination2 from "./BookPagination2";

function BookContainer() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Layout 1
  const [currentPage2, setCurrentPage2] = useState(1); // Layout 2
  const [postsPerPage, setpostsPerPage] = useState(5); // Layout 1
  const [postsPerPage2, setpostsPerPage2] = useState(5); // Layout 2
  const [search, setSearch] = useState("");
  const [customLayout, setCustomLayout] = useState(1);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filteredBooks2, setFilteredBooks2] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      const res = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=Q9kGalTs7dwfud4QZnRhS4kxhMupu95t"
      );
      setBooks(res.data.results);
      console.log(res.data.results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (search.length !== 1) {
      setFilteredBooks([]);
      setFilteredBooks2([]);
    } else {
      const filtered = books.filter((book) => {
        if (book.display_name.toLowerCase().includes(search.toLowerCase())) {
          return book;
        } else {
          return "";
        }
      });

      const filtered2 = books.filter((book) => {
        if (book.display_name.toLowerCase().includes(search.toLowerCase())) {
          return book;
        } else {
          return "";
        }
      });

      setFilteredBooks(filtered);
      setFilteredBooks2(filtered2);
    }
  }, [search, books]);

  //Get current pages Layout 1
  const indexOfLastPost = currentPage * postsPerPage; //Layout 1
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // Layout 1
  const currentPosts = books.slice(indexOfFirstPost, indexOfLastPost); //Layout 1

  //Get current pages Layout 2
  const indexOfLastPost2 = currentPage2 * postsPerPage2; //Layout 2
  const indexOfFirstPost2 = indexOfLastPost2 - postsPerPage2; // Layout 2
  const currentPosts2 = books.slice(indexOfFirstPost2, indexOfLastPost2); //Layout 2

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber); //Layout 1
  const paginate2 = (pageNumber) => setCurrentPage2(pageNumber); //Layout 2

  //Page Count
  const pageCount = Math.ceil(books.length / postsPerPage); // Layout 1
  const pageCount2 = Math.ceil(books.length / postsPerPage2); // Layout 2

  //Previous Page
  const previousPage = () => {
    setCurrentPage((currentPage) => currentPage - 1); // Layout 1
  };

  const previousPage2 = () => {
    setCurrentPage2((currentPage2) => currentPage2 - 1); // Layout 2
  };

  //Next Page
  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1); // Layout 1
  };

  const nextPage2 = () => {
    setCurrentPage2((currentPage2) => currentPage2 + 1); // Layout 2
  };

  //First and Last
  let firstPage = books[0]; // Layout 1
  let lastPage = books[books.length - 1]; // Layout 1
  let firstPage2 = books[0]; // Layout 1
  let lastPage2 = books[books.length - 1]; // Layout 1

  return (
    <>
      <BookNav
        onSearch={(value) => {
          setSearch(value);
          setCurrentPage(1);
        }}
      />

      {/* Change Layout */}
      <div className="grid grid-flow-col grid-cols-1 grid-rows-1 gap-3 bg-gray-200">
        <div className="lg:col-span-2">
          <h1 className="text-lg sm:text-2xl text-black font-bold p-4">
            Gêneros
          </h1>
        </div>
        {customLayout === 1 ? (
          <div className="flex justify-center items-center p-4">
            <h1 className="text-sm">
              Exibir
              <select
                defaultValue="5"
                className="bg-transparent border-b-2 border-gray-500"
                onChange={(event) => {
                  setpostsPerPage(event.target.value);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              por vez
            </h1>
          </div>
        ) : (
          <div className="flex justify-center items-center p-4">
            <h1 className="text-sm">
              Exibir
              <select
                defaultValue="5"
                className="bg-transparent border-b-2 border-gray-500"
                onChange={(event) => {
                  setpostsPerPage2(event.target.value);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              por vez
            </h1>
          </div>
        )}
        <div className="flex justify-center items-center p-4">
          {customLayout === 1 ? (
            <button onClick={() => setCustomLayout(1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-4 text-blue-900"
                fill="#5062f0"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
          ) : (
            <button onClick={() => setCustomLayout(1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-4"
                fill="#d0d2e2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
          )}
          {customLayout === 2 ? (
            <button onClick={() => setCustomLayout(2)}>
              <svg
                aria-hidden="true"
                focusable="false"
                dataprefix="fas"
                dataicon="th-large"
                className="h-6 w-6 text-blue-900"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"
                />
              </svg>
            </button>
          ) : (
            <button onClick={() => setCustomLayout(2)}>
              <svg
                aria-hidden="true"
                focusable="false"
                dataprefix="fas"
                dataicon="th-large"
                className="h-6 w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {customLayout === 1 ? (
        //Custom Layout 1
        <div>
          <form className="grid grid-flow-col grid-cols-1 grid-rows-1 gap-5 mt-12 mb-auto sm:mb-24 lg:mb-18 h-full sm:h-full md:h-full lg:h-96">
            <div>
              {(filteredBooks.length ? filteredBooks : currentPosts).map(
                (book, index) => (
                  <div
                    key={index}
                    className="grid grid-flow-col grid-cols-1 grid-rows-4 sm:grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 gap-0 sm:gap-5 mb-5"
                  >
                    <BookCard
                      books={books}
                      id={book.list_name}
                      list_name={book.list_name}
                      display_name={book.display_name}
                      list_name_encoded={book.list_name_encoded}
                      oldest_published_date={book.oldest_published_date}
                      newest_published_date={book.newest_published_date}
                      updated={book.updated}
                    />
                  </div>
                )
              )}
            </div>
          </form>
          {
            <BookPagination
              pageCount={pageCount}
              postsPerPage={postsPerPage}
              firstPage={firstPage}
              lastPage={lastPage}
              currentPage={currentPage}
              previousPage={previousPage}
              nextPage={nextPage}
              totalPosts={filteredBooks.length || books.length}
              paginate={paginate}
            />
          }
        </div>
      ) : (
        //Custom Layout 2
        <div>
          <form className="grid grid-flow-col grid-cols-1 grid-rows-1 mt-12 mb-12 h-full">
            <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 grid-rows-3 sm:grid-rows-1 gap-5">
              {(filteredBooks2.length ? filteredBooks2 : currentPosts2).map(
                (book, index) => (
                  <div key={index}>
                    <BookCard
                      books={books}
                      id={book.list_name}
                      list_name={book.list_name}
                      display_name={book.display_name}
                      list_name_encoded={book.list_name_encoded}
                      oldest_published_date={book.oldest_published_date}
                      newest_published_date={book.newest_published_date}
                      updated={book.updated}
                    />
                  </div>
                )
              )}
            </div>
          </form>
          {
            <BookPagination2
              pageCount={pageCount2}
              postsPerPage={postsPerPage2}
              firstPage={firstPage2}
              lastPage={lastPage2}
              currentPage={currentPage2}
              previousPage={previousPage2}
              nextPage={nextPage2}
              totalPosts={filteredBooks.length || books.length}
              paginate={paginate2}
            />
          }
        </div>
      )}
    </>
  );
}

export default BookContainer;
