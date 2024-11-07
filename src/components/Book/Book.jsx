import PropTypes from "prop-types";

const Book = ({ book }) => {
  console.log(book);
  const { image, bookName, author } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-xl border-[1px] p-6">
      <figure className="rounded-2xl bg-[#f3f3f398]">
        <img className="w-[134px] py-8" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;