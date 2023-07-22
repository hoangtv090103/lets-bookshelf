import AddBookButton from "../components/AddBookButton";
import Book from "../components/Book";

const BookLayout = (props) => {
  const { books, setBooks, setShowModal } = props;

  const handleAddBook = () => {
    setShowModal(true);
  };

  const handleRemoveBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
    localStorage.setItem("books", JSON.stringify(newBooks));
  };

  return (
    <div className="w-[80%] border-l-2">
      <h1 className="flex justify-center items-center">Book Layout</h1>
      <AddBookButton handleAddBook={handleAddBook} />
      <div className="grid grid-cols-4 gap-4 border-t-2 p-1 overflow-y-scroll">
        {books.map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </div>
    </div>
  );
};

export default BookLayout;
