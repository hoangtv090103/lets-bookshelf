const AddBookButton = ({ handleAddBook }) => {
  return (
    <button className="btn btn-primary p-1" onClick={handleAddBook}>
      + Add Book
    </button>
  );
};

export default AddBookButton;
