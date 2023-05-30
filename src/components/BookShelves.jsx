const BookShelves = ({ books }) => {

  return books.length === 0 ? (
    <div>
      <h3 className="text-center">No book in the shelf</h3>
    </div>
  ) : (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative w-1/2">
      {books.map((book) => (
        <div
          key={book.id}
          className="flex flex-col justify-between items-center border-2 border-gray-300 p-2 rounded-md"
        >
          <div className="flex flex-col justify-center items-center">
            <img src={book.cover} alt="cover" className="w-1/2 self-center" />
            <h1 className="text-xl">{book.title}</h1>
            <h2 className="text-md">{book.author}</h2>
            <div>{book.genre}</div>
            <div>{book.rate}</div>
            <div>{book.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BookShelves;
