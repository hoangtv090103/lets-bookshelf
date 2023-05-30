const Modal = (setIsOpenedModal) => {
  const inputDiv = "flex items-center";
  return (
    <>
      <div className="z-10 bg-slate-500 w-full h-full fixed overflow-auto text-center bg-opacity-40 flex justify-center items-center">
        <form className="flex flex-col bg-white w-[70%] z-20 justify-around rounded-xl h-[70%]">
          <button
            className="self-end mr-2 mt-2 border-2 p-1 hover:bg-slate-300 hover:cursor-pointer"
            onClick={() => setIsOpenedModal(false)}
          >
            X
          </button>
          <input
            type="text"
            placeholder="Untitled"
            className="text-5xl m-1 rounded-md hover:outline"
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
            />
          </div>
          <div className={inputDiv}>
            <label htmlFor="image" className="w-20 text-left pl-2">
              Image URL
            </label>
            <input
              id="image"
              type="text"
              placeholder="Image URL"
              className="border-2 border-gray-300 p-2 m-2 rounded-md grow"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 rounded-xl p-2 m-2 text-white font-semibold"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
