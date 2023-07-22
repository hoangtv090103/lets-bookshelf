const Book = (props) => {
  const { book, handleRemoveBook } = props;
  return (
    //
    <div className="flex flex-col items-center border-2 rounded-lg max-h-fit">
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
          className="w-40 h-auto rounded-xl" //object-cover: cover the entire container while maintaining aspect ratio
        />
      ) : null}
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
    </div>
  );
};

export default Book;
