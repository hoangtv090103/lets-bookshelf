import React from "react";
import SideWrapper from "../components/SideWrapper";
import BookShelves from "../components/BookShelves";
import Modal from "../components/Modal";

const PageLayout = ({ books, setBooks, isOpenedModal, setIsOpenedModal }) => {
  const addBook = (book) => {
    setBooks([book, ...books]);
  };

  return (
    <>
      <div className="flex justify-between md:justify-around items-center">
        <h1 className="text-center">My books</h1>
        <button
          className="bg-blue-500 rounded-xl p-2 mr-2 text-white font-semibold"
          onClick={() => setIsOpenedModal(true)}
        >
          Add
        </button>
      </div>
      <div className="flex justify-center items-center border-t-2">
        <SideWrapper />
        <BookShelves />
      </div>
    </>
  );
};

export default PageLayout;
