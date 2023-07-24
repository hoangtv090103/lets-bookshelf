import AddBookButton from "../components/AddBookButton";
import Book from "../components/Book";

const BookLayout = (props) => {
  const {
    books,
    setBooks,
    setShowModal,
    showDeleteModal,
    setDeleteModal,
    activeGenre,
    activeState,
  } = props;

  const handleAddBook = () => {
    setShowModal(true);
  };

  const handleRemoveBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
    localStorage.setItem("books", JSON.stringify(newBooks));
  };

  return (
    <div className="w-full md:w-[80%] border-l-2 flex flex-col">
      <div>
        <h1 className="max-w-fit m-auto">
          {activeGenre && props.searchTerm === "genre"
            ? activeGenre
            : activeState}
        </h1>
        <AddBookButton handleAddBook={handleAddBook} />
      </div>
      <hr />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-1 overflow-auto 2xl:grid-cols-6">
        {books.map((book) => {
          if (
            (book.genre === activeGenre && props.searchTerm === "genre") ||
            (book.state === activeState && props.searchTerm === "state") ||
            props.activeState === "All"
          ) {
            return (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={handleRemoveBook}
                setDeleteModal={setDeleteModal}
                showDeleteModal={showDeleteModal}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BookLayout;
