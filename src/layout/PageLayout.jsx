import React from "react";
import SideWrapper from "../components/SideWrapper";
import BookShelves from "../components/BookShelves";

const PageLayout = ({ books, setIsOpenedModal }) => {

  return (
    <>
      <div className="flex justify-between md:justify-around items-center">
        <h1 className="text-center">My books</h1>
        <button
          className="bg-blue-500 rounded-xl p-2 mr-2 text-white font-semibold"
          onClick={() => setIsOpenedModal((prev) => !prev)}
        >
          Add
        </button>
      </div>
      <div className="flex justify-center items-center border-t-2">
        <SideWrapper />
        <BookShelves books={books} />
      </div>
    </>
  );
};

export default PageLayout;
