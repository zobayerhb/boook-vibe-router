import { useLoaderData, useParams } from "react-router-dom";
import { addStoredWishListData, addToStoredData } from "../../utilities/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const bookData = useLoaderData();
  const book = bookData.find((book) => book.bookId === id);
  const { image, bookName, review } = book;

  const handleMarkAsRead = (id) => {
    addToStoredData(id);
  };

  const handleWishListData = id => {
    addStoredWishListData(id)
  }

  return (
    <div>
      <div className="w-36">
        <img className="w-full" src={image} alt={bookName} />
      </div>
      <div>
        <div>
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <p>Review: {review}</p>
        </div>
      </div>
      <button
        onClick={() => handleMarkAsRead(bookId)}
        className="btn btn-primary"
      >
        Mark as Read
      </button>
      <button onClick={() => handleWishListData(bookId)} className="btn btn-outline">Add to WishList</button>
    </div>
  );
};

export default BookDetail;
