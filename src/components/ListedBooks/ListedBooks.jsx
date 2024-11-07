import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utilities/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [booksList, setBooksList] = useState([]);
  const [sort, setSort] = useState("");
  const booksDataLoad = useLoaderData();
  console.log(booksDataLoad);

  useEffect(() => {
    const storedData = getStoredReadList();
    const storeDataConInt = storedData.map((data) => parseInt(data));

    const allBooks = booksDataLoad.filter((book) =>
      storeDataConInt.includes(book.bookId)
    );
    setBooksList(allBooks);
  }, []);

  const handleSortData = (sortType) => {
    setSort(sortType);

    if (sortType === "No of pages") {
      const sortedReadList = [...booksList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setBooksList(sortedReadList);
    }

    if (sortType === "Ratings") {
      const sortedReadList = [...booksList].sort((a, b) => b.rating - a.rating);
      setBooksList(sortedReadList);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Listed books list</h1>

      <details className="dropdown">
        <summary className="btn m-1">
          {sort ? `Sort by: ${sort}` : "Sort by"}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleSortData("Ratings")}>
            <a>Ratings</a>
          </li>
          <li onClick={() => handleSortData("No of pages")}>
            <a>No of pages</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>WishList Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Reed Books: {booksList.length}</h2>
          <div>
            {booksList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">WishList books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
