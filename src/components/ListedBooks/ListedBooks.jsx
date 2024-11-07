import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utilities/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [booksList, setBooksList] = useState([]);
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

  return (
    <div>
      <h1 className="text-3xl font-bold">Listed books list</h1>

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
