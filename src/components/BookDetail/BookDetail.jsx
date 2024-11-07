import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const bookData = useLoaderData();

  const book = bookData.find((book) => book.bookId === id);

  const { image, bookName, review } = book;

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
        <button className="btn btn-primary">Read</button>
        <button className="btn btn-outline">WisList</button>
    </div>
  );
};

export default BookDetail;
