import React from "react";
import ReactModal from "react-modal";
const ConfirmDeleteModal = (props) => {
  return (
    <ReactModal
      isOpen={props.isOpen || false}
      appElement={document.getElementById("root") || undefined}
      ariaHideApp={false}
      contentElement={() => {
        return (
          <form>
            <h2>Are you sure you want to delete this book?</h2>
            <div className="modal-buttons">
              <button
                className="btn btn-danger"
                onClick={() => { 
                  props.handleDeleteBook(props.bookId);
                  props.setDeleteModal(false);
                }}
              >
                Yes
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  props.setDeleteModal(false);
                }}
              >
                No
              </button>
            </div>
          </form>
        );
      }}
    />
  );
};
export default ConfirmDeleteModal;
