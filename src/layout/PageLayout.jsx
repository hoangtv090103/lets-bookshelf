import React from "react";
import SideWrapper from "../components/SideWrapper";
import BookShelves from "../components/BookShelves";
import Popup from "reactjs-popup";

const PageLayout = ({ books, setBooks }) => {
  const addBook = (book) => {
    setBooks([book, ...books]);
  };

  return (
    <>
      <div className="flex justify-between md:justify-around items-center">
        <h1 className="text-center">My books</h1>
        <Popup
          // position="center center"
          trigger={
            <button className="bg-blue-500 rounded-xl p-2 mr-2 text-white font-semibold">
              Add
            </button>
          }
          modal
          nested
        >
          {/* <div className="w-full h-full relative bg-slate-600">
            {/* <form> */}
              {/* <label htmlFor="title"></label>
              <input id="title"></input>  */}
            {/* </form> */}
          {/* </div> */}
        </Popup>
      </div>
      <div className="flex justify-center items-center border-t-2">
        <SideWrapper />
        <BookShelves />
      </div>
    </>
  );
};

export default PageLayout;
