const Book = (props) => {
  const { book, handleRemoveBook } = props;
  return (
    //
    <div className="flex flex-col items-center border-2 rounded-lg max-h-fit min-w-fit">
      <button
        className="btn btn-danger max-w-fit self-end rounded-full"
        onClick={() => handleRemoveBook(book.id)}
      >
        X
      </button>
      {book.cover ? (
        <img
          src={book.cover}
          alt=""
          className="w-40 h-auto rounded" //object-cover: cover the entire container while maintaining aspect ratio
        />
      ) : (
        <div className="w-40 h-40 border-2 rounded-xl"></div>
      )}
      <h3>{book.title}</h3>
      <h6>{book.author}</h6>
    </div>
  );
};

export default Book;
