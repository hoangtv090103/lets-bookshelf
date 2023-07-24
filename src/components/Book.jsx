import ConfirmDeleteModal from "../modals/ConfirmDeleteModal";

const Book = (props) => {
  const { book, showModal, handleRemoveBook, setDeleteModal, showDeleteModal } = props;
  const openDeleteModal = () => {
    console.log(showDeleteModal);
    setDeleteModal(true);
    return (
      <ConfirmDeleteModal
        isOpen={showModal}
        setDeleteModal={setDeleteModal}
        handleRemoveBook={handleRemoveBook}
        bookId={book.id}
      />
    );
  };

  return (
    //
    <div className="flex flex-col items-center border-2 rounded-lg max-h-fit min-w-fit">
      <button
        className="btn btn-danger max-w-fit self-end rounded-full"
        onClick={openDeleteModal}
      >
        X
      </button>
      {book.cover ? (
        <img
          src={book.cover}
          alt=""
          className="w-auto max-h-40 rounded" //object-cover: cover the entire container while maintaining aspect ratio
        />
      ) : (
        <div className="w-40 h-40 border-2 rounded-xl"></div>
      )}
      <h3>{book.title}</h3>
      <h6>{book.author}</h6>
      <ConfirmDeleteModal/>
    </div>
  );
};

export default Book;
