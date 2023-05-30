import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormModal = ({ setIsOpenedModal, books, setBooks }) => {
  const [cover, setCover] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [rate, setRate] = useState();
  const [status, setStatus] = useState();

  const addBook = (e) => {
    e.preventDefault();
    setBooks((prevBooks) => [
      ...prevBooks,
      {
        id: uuidv4(),
        cover: cover,
        title: title,
        author: author,
        genre: genre,
        rate: rate,
        status: status,
      },
    ]);
    setIsOpenedModal((prev) => !prev);
    console.log(books);
  };

  const inputDiv = "flex items-center";
  return (
    <>
      <div className="z-10 bg-slate-500 w-full h-full fixed overflow-auto text-center bg-opacity-40 flex justify-center items-center">
        <form className="flex flex-col bg-white w-[70%] z-20 justify-around rounded-xl min-h-fit overflow-auto">
          <button
            className="self-end mr-2 mt-2 border-2 p-1 hover:bg-slate-300 hover:cursor-pointer"
            onClick={() => setIsOpenedModal((prev) => !prev)}
          >
            X
          </button>
          <img src={cover} alt="cover" className="w-1/2 self-center" />
          <input
            type="file"
            className="m-1 rounded-md hover:outline"
            accept="image/*"
            onChange={(e) => {
              console.log(e.target.files);
              setCover(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <input
            type="text"
            placeholder="Untitled"
            className="text-5xl m-1 rounded-md hover:outline"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div className={inputDiv}>
            <label htmlFor="author" className="w-20 text-left pl-2">
              Author
            </label>
            <input
              id="author"
              type="text"
              placeholder="Author"
              className="border-2 border-gray-300 p-2 m-2 rounded-md grow"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </div>
          <div className={inputDiv}>
            <label htmlFor="genre" className="w-20 text-left pl-2">
              Genre
            </label>
            <input
              id="genre"
              type="text"
              placeholder="Genre"
              className="border-2 border-gray-300 p-2 m-2 rounded-md grow"
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
          </div>
          <div className={inputDiv}>
            <label htmlFor="rate" className="w-20 text-left pl-2">
              Rate
            </label>
            <input
              type="text"
              id="rate"
              placeholder="Rate"
              className="border-2 border-gray-300 p-2 m-2 rounded-md grow"
              onChange={(e) => {
                setRate(e.target.value);
              }}
            />
          </div>
          <div className={inputDiv}>
            <label htmlFor="rate" className="w-20 text-left pl-2">
              Status
            </label>
            <input
              type="text"
              id="state"
              placeholder="Status"
              className="border-2 border-gray-300 p-2 m-2 rounded-md grow"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 rounded-xl p-2 m-2 text-white font-semibold"
            onClick={addBook}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default FormModal;
